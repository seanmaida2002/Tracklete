import { Router } from "express";
const router = Router();
import xss from "xss";
import {
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../data/workouts.js";
import {
  createExercise,
  updateExercise,
  getExercise,
  deleteExercise,
  getAllExercises,
  deleteAllExercises,
} from "../data/exercise.js";
import { getUserByUsername, getUser } from "../data/users.js";
import { checkDate } from "../helpers.js"

router
  .route("/")
  .get(async (req, res) => {
    try {
      const currUserData = await getUserByUsername(
        `${req.session.user.username}`
      );
      /* console.log(currUserData); */
      let workoutsDataArray = [];
      const promises = currUserData.workouts.map(async (workoutID) => {
        return await getWorkout(workoutID);
      });

      await Promise.all(promises).then((workoutsData) => {
        workoutsDataArray = workoutsData;
      });

      res.render("workoutsPage", {
        title: "Tracklete | Workouts",
        firstName: currUserData.firstName,
        lastName: currUserData.lastName,
        username: currUserData.username,
        workouts: workoutsDataArray.reverse(),
      });
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res) => {
    const addWorkoutFormData = req.body;
    /* console.log(addWorkoutFormData); */
    let workoutType = xss(addWorkoutFormData.workoutType);
    workoutType = workoutType.trim();
    let date = xss(addWorkoutFormData.date);
    let timeElapsedH = xss(addWorkoutFormData.timeElapsedH);
    timeElapsedH = timeElapsedH.trim();
    let timeElapsedM = xss(addWorkoutFormData.timeElapsedM);
    timeElapsedM = timeElapsedM.trim();
    let timeElapsedS = xss(addWorkoutFormData.timeElapsedS);
    timeElapsedS = timeElapsedS.trim();
    let timeElapsed;
    let caloriesBurned = xss(addWorkoutFormData.caloriesBurned);
    let comments = xss(addWorkoutFormData.comments);

    ////////
    try {
      const currUserData = await getUserByUsername(
        `${req.session.user.username}`
      );

      ///// error checking
      /// calories
      if (typeof caloriesBurned !== "string") {
        throw "Calories must be a string";
      }
      caloriesBurned.trim();
      if (parseInt(caloriesBurned) < 0) {
        throw "Calories must be greater than 0";
      }
      if (isNaN(caloriesBurned)) {
        throw "Calories must be a number";
      }

      /// date
      let dateArr = date.split("-");
      date = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
      checkDate(date, "date");

      /// time elapsed
      if (timeElapsedH === "") {
        timeElapsedH = "00";
      }
      if (
        timeElapsedH === "0" ||
        timeElapsedH === "1" ||
        timeElapsedH === "2" ||
        timeElapsedH === "3" ||
        timeElapsedH === "4" ||
        timeElapsedH === "5" ||
        timeElapsedH === "6" ||
        timeElapsedH === "7" ||
        timeElapsedH === "8" ||
        timeElapsedH === "9"
      ) {
        timeElapsedH = `0${timeElapsedH}`;
      }
      if (timeElapsedM === "") {
        timeElapsedM = "00";
      }
      if (
        timeElapsedM === "0" ||
        timeElapsedM === "1" ||
        timeElapsedM === "2" ||
        timeElapsedM === "3" ||
        timeElapsedM === "4" ||
        timeElapsedM === "5" ||
        timeElapsedM === "6" ||
        timeElapsedM === "7" ||
        timeElapsedM === "8" ||
        timeElapsedM === "9"
      ) {
        timeElapsedM = `0${timeElapsedM}`;
      }
      if (timeElapsedS === "") {
        timeElapsedS = "00";
      }
      if (
        timeElapsedS === "0" ||
        timeElapsedS === "1" ||
        timeElapsedS === "2" ||
        timeElapsedS === "3" ||
        timeElapsedS === "4" ||
        timeElapsedS === "5" ||
        timeElapsedS === "6" ||
        timeElapsedS === "7" ||
        timeElapsedS === "8" ||
        timeElapsedS === "9"
      ) {
        timeElapsedS = `0${timeElapsedS}`;
      }

      if (isNaN(timeElapsedH)) throw "Hours must be a number";
      if (isNaN(timeElapsedM)) throw "Minutes must be a number";
      if (isNaN(timeElapsedS)) throw "Seconds must be a number";

      if (parseInt(timeElapsedH) < 0 || parseInt(timeElapsedH) > 99)
        throw "Hours must be between 0 and 99";
      if (parseInt(timeElapsedM) < 0 || parseInt(timeElapsedM) > 60)
        throw "Minutes must be between 0 and 60";
      if (parseInt(timeElapsedS) < 0 || parseInt(timeElapsedS) > 60)
        throw "Seconds must be between 0 and 60";

      timeElapsed = `${timeElapsedH}:${timeElapsedM}:${timeElapsedS}`;

      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      let formattedDate =
        (month < 10 ? "0" + month : month) +
        "/" +
        (day < 10 ? "0" + day : day) +
        year;

      /// comments
      if (typeof comments !== "string") {
        throw "Comments must be a string";
      }
      comments.trim();

      /////////////////////////
      let newWorkout = await createWorkout(
        currUserData._id.toString(),
        date,
        timeElapsed,
        workoutType,
        parseInt(caloriesBurned),
        comments
      );

      ////// EXERCISES HERE

      let exerciseKeys = Object.keys(addWorkoutFormData);
      let exerciseRowKeys = [];
      exerciseKeys.forEach((key) => {
        if (key.includes("row")) {
          exerciseRowKeys.push(key);
        }
      });
      let exerciseName;
      let sets = 0; /* to number - 0 if run*/
      let reps = []; /* to number then to array - empty arr if run */
      let weight = 0; /* to number - 0 if run */
      let weightUnits = "n/a"; /* n/a if run */
      let distance = 0; /* 0 if weight */
      let distanceUnits = "n/a"; /* n/a if weight */
      let exerciseTimeElapsed = "00:00:00"; /* 00:00:00 - real if run */
      if (workoutType === "Weight Training") {
        for (let i = 0; i < exerciseRowKeys.length; i += 4) {
          exerciseName = xss(addWorkoutFormData[`${exerciseRowKeys[i]}`]);
          sets = xss(addWorkoutFormData[`${exerciseRowKeys[i + 1]}`]);
          reps = xss(addWorkoutFormData[`${exerciseRowKeys[i + 2]}`]);
          weight = xss(addWorkoutFormData[`${exerciseRowKeys[i + 3]}`]);
          exerciseName = exerciseName.trim();
          sets = sets.trim();
          reps = reps.trim();
          weight = weight.trim();
          /* if (isNaN(parseInt(sets))) {
            throw "Error:  sets must be a number";
          } */

          let exerciseCreated = await createExercise(
            newWorkout._id.toString(),
            workoutType,
            exerciseName,
            sets,
            reps,
            weight,
            "lbs",
            distance,
            distanceUnits,
            exerciseTimeElapsed
          );
        }
      } else {
        for (let i = 0; i < exerciseRowKeys.length; i += 4) {
          exerciseName = xss(addWorkoutFormData[`${exerciseRowKeys[i]}`]);
          distance = xss(addWorkoutFormData[`${exerciseRowKeys[i + 1]}`]);
          distanceUnits = xss(addWorkoutFormData[`${exerciseRowKeys[i + 2]}`]);
          exerciseTimeElapsed = xss(
            addWorkoutFormData[`${exerciseRowKeys[i + 3]}`]
          );
          exerciseName = exerciseName.trim();
          distance = distance.trim();
          distanceUnits = distanceUnits.trim();
          exerciseTimeElapsed = exerciseTimeElapsed.trim();
          /* if (isNaN(parseInt(sets))) {
            throw "Error:  sets must be a number";
          } */

          let exerciseCreated = await createExercise(
            newWorkout._id.toString(),
            workoutType,
            exerciseName,
            sets,
            reps,
            weight,
            "lbs",
            distance,
            distanceUnits,
            exerciseTimeElapsed
          );
        }
      }

      /////////////////////////////////////////////////
      return res.redirect("/workouts");
    } catch (e) {
      /* console.log(`CREATE WORKOUT DIDNT WORK ${e}`); */
    }
  });

router
  .route("/:workoutId")
  .get(async (req, res) => {
    res.redirect('/workouts')
  })
  .delete(async (req, res) => {
    const workoutId = req.params.workoutId;
    try {
      const deletedWorkout = await deleteWorkout(workoutId);
      /* console.log(`DELETED ${deletedWorkout}`); */
      return res.redirect("/workouts");
    } catch (e) {
      /* console.log(`ERROR DELETING WORKOUT WITH ID: ${workoutId}\n${e}`); */
      res.status(500).render("500");
    }
  })
  .post(async (req, res) => {
    const editWorkoutFormData = req.body;
    const workoutId = req.params.workoutId;
    const dateArr = editWorkoutFormData.date.split("-");
    const dateY = dateArr[0];
    const dateM = dateArr[1];
    const dateD = dateArr[2];
    /* console.log(editWorkoutFormData); */
    try {
      checkDate(`${dateM}/${dateD}/${dateY}`, "date");
      const currUser = await getUserByUsername(req.session.user.username);

      let hours = editWorkoutFormData.timeElapsedH.trim();
      let minutes = editWorkoutFormData.timeElapsedM.trim();
      let seconds = editWorkoutFormData.timeElapsedS.trim();

      if (hours.length === 1) {
        hours = "0" + hours;
      }
      if (minutes.length === 1) {
        minutes = "0" + minutes;
      }
      if (seconds.length === 1) {
        seconds = "0" + seconds;
      }

      let updateWorkoutContent = {
        userID: currUser._id.toString(),
        date: `${dateM}/${dateD}/${dateY}`,
        timeElapsed: `${hours}:${minutes}:${seconds}`,
        caloriesBurned: parseInt(editWorkoutFormData.caloriesBurned),
        comments: xss(editWorkoutFormData.comments),
      };

      /* console.log(updateWorkoutContent); */

      const updatedWorkout = await updateWorkout(
        workoutId,
        updateWorkoutContent
      );
      const deleteAll = await deleteAllExercises(workoutId);
      //////////// take exercise input and convert to nice //
      let workoutType = editWorkoutFormData.workoutType;
      let exerciseKeys = Object.keys(editWorkoutFormData);
      let exerciseRowKeys = [];
      exerciseKeys.forEach((key) => {
        if (key.includes("row")) {
          exerciseRowKeys.push(key);
        }
      });
      let exerciseName;
      let sets = 0; /* to number - 0 if run*/
      let reps = []; /* to number then to array - empty arr if run */
      let weight = 0; /* to number - 0 if run */
      let weightUnits = "n/a"; /* n/a if run */
      let distance = 0; /* 0 if weight */
      let distanceUnits = "n/a"; /* n/a if weight */
      let exerciseTimeElapsed = "00:00:00"; /* 00:00:00 - real if run */
      if (workoutType === "Weight Training") {
        for (let i = 0; i < exerciseRowKeys.length; i += 4) {
          exerciseName = xss(editWorkoutFormData[`${exerciseRowKeys[i]}`]);
          sets = xss(editWorkoutFormData[`${exerciseRowKeys[i + 1]}`]);
          reps = xss(editWorkoutFormData[`${exerciseRowKeys[i + 2]}`]);
          weight = xss(editWorkoutFormData[`${exerciseRowKeys[i + 3]}`]);
          exerciseName = exerciseName.trim();
          sets = sets.trim();
          reps = reps.trim();
          weight = weight.trim();
          /* if (isNaN(parseInt(sets))) {
            throw "Error:  sets must be a number";
          } */
          if (
            exerciseName === "" &&
            sets === "" &&
            reps === "" &&
            weight === ""
          ) {
          } else {
            let exerciseCreated = await createExercise(
              workoutId.toString(),
              workoutType,
              exerciseName,
              sets,
              reps,
              weight,
              "lbs",
              distance,
              distanceUnits,
              exerciseTimeElapsed
            );
          }
        }
      } else {
        for (let i = 0; i < exerciseRowKeys.length; i += 4) {
          exerciseName = xss(editWorkoutFormData[`${exerciseRowKeys[i]}`]);
          distance = xss(editWorkoutFormData[`${exerciseRowKeys[i + 1]}`]);
          distanceUnits = xss(editWorkoutFormData[`${exerciseRowKeys[i + 2]}`]);
          exerciseTimeElapsed = xss(
            editWorkoutFormData[`${exerciseRowKeys[i + 3]}`]
          );
          exerciseName = exerciseName.trim();
          distance = distance.trim();
          distanceUnits = distanceUnits.trim();
          exerciseTimeElapsed = exerciseTimeElapsed.trim();
          /* if (isNaN(parseInt(sets))) {
            throw "Error:  sets must be a number";
          } */

          if (
            exerciseName === "" &&
            sets === "" &&
            reps === "" &&
            weight === ""
          ) {
          } else {
            let exerciseCreated = await createExercise(
              workoutId.toString(),
              workoutType,
              exerciseName,
              sets,
              reps,
              weight,
              "lbs",
              distance,
              distanceUnits,
              exerciseTimeElapsed
            );
          }
        }
      }
      /* console.log(`UPDATED EXERCISES FOR ${workoutId}`); */

      return res.redirect("/workouts");
    } catch (e) {
      res.status(500).render("500");
    }
  });

export default router;
