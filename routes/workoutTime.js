import { Router } from "express";
import { getUserByUsername } from "../data/users.js";
import { getWorkout } from "../data/workouts.js";
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    const currUserData = await getUserByUsername(req.session.user.username);
    let promises = currUserData.workouts.map(async (workoutID) => {
      const workout = await getWorkout(workoutID);
      return {
        date: workout.date,
        timeElapsed: workout.timeElapsed,
      };
    });
    let timesArray = await Promise.all(promises);
    res.json(timesArray);
  } catch (e) {
    console.log(e);
    res.status(500).render("500");
  }
});

export default router;
