let exerciseRowCount = 0;

let workoutElements = document.querySelectorAll(".workouts-workout-individual");
let workoutCountElement = document.getElementById(
  "workouts-personal-stats-workouts"
);
let countWorkouts = workoutElements.length;

workoutCountElement.textContent = `Workouts: ${countWorkouts}`;

let calorieElements = document.querySelectorAll(".workouts-workout-cals");
let calorieCountElement = document.getElementById(
  "workouts-personal-stats-cal"
);
let countCalories = 0;
calorieElements.forEach((element) => {
  let cal = element.textContent.split(" ");
  let calNum = parseInt(cal[0]);
  countCalories = countCalories + calNum;
});
calorieCountElement.textContent = `Calories Burned: ${countCalories} cal`;

const addWorkoutButton = document.getElementById("workouts-workout-add-button");
let openWorkoutForm = false;
let editButtonAlreadyOpen = false;

addWorkoutButton.addEventListener("click", function () {
  if (openWorkoutForm === true || editButtonAlreadyOpen === true) {
    return;
  } else {
    const noWorkoutsElement = document.getElementById(
      "workouts-no-workouts-yet"
    );
    if (noWorkoutsElement) {
      noWorkoutsElement.textContent = "";
    }
    let newWorkoutForm = `
    <form action="/workouts" method="POST" name="new-workout-form" id="new-workout-form" class="workouts-workout-individual">
        <div class="workouts-workout-title">
          <select id="workoutType" name="workoutType" class="workouts-workout-type">
            <option value="Weight Training">Weight Training</option>
            <option value="Cardio">Cardio</option>
          </select>
          <input id="caloriesBurned" name="caloriesBurned" type="text" placeholder="" class="workouts-workout-cals">cal</input>
        </div>
      <div id="workouts-caloriesBurnedError"></div>
      <div class="workouts-workout-subtitle">
        <input id="date" name="date" type="date" class="workouts-workout-date"></input>
        <div class=workouts-workout-time>
            Time Elapsed:
            <input id="timeElapsedH" name="timeElapsedH" type="text" placeholder="HH" >:</input>
            <input id="timeElapsedM" name="timeElapsedM" type="text" placeholder="MM" >:</input>
            <input id="timeElapsedS" name="timeElapsedS" type="text" placeholder="SS" ></input>
        </div>
      </div>
      <div id="workouts-subtitleError-container">
        <div id="workouts-dateError"></div>
        <div id="workouts-timeElapsedError"></div>
      </div>
      
      <button id="workouts-workout-add-exercise-button">Add an exercise +</button>
      <div id="workouts-new-workout-exercise-grid" class="workouts-workout-exercise-grid">
        <div class="workouts-workout-exercise-grid-item-header grid-exercise">Exercise</div>
        <div id="exercise-title-2" class="workouts-workout-exercise-grid-item-header grid-sets"></div>
        <div id="exercise-title-3"  class="workouts-workout-exercise-grid-item-header grid-reps"></div>
        <div id="exercise-title-4" class="workouts-workout-exercise-grid-item-header grid-weight"></div>

    </div>
    <div id="workouts-exerciseError"></div>
    <div class="workouts-workout-comment-container">
      <div class="workouts-workout-comment-header">Notes</div>
      <textarea name="comments" id="comments" class="workouts-workout-comment-content"></textarea>
    </div>
    <div id="workouts-commentsError"></div>
    <div class="workouts-workout-button-container">
        <button id="cancelNewWorkoutButton" class="workouts-workout-delete-button flex">
        <img src="/public/images/trashIcon.png">
        </button>
        <button id="doneWorkoutButton" name="doneWorkoutButton" type="submit" class="workouts-workout-done-button flex">Done</button>
    </div>
    </form>
  `;

    document
      .getElementById("workouts-workout-grid")
      .insertAdjacentHTML("afterbegin", newWorkoutForm);
    openWorkoutForm = true;

    const workoutTypeSelect = document.getElementById("workoutType");
    const exerciseHeader2 = document.getElementById("exercise-title-2");
    const exerciseHeader3 = document.getElementById("exercise-title-3");
    const exerciseHeader4 = document.getElementById("exercise-title-4");
    if (workoutTypeSelect.value === "Weight Training") {
      exerciseHeader2.textContent = "Sets";
      exerciseHeader3.textContent = "Reps";
      exerciseHeader4.textContent = "Weight";
    } else if (workoutTypeSelect.value === "Cardio") {
      exerciseHeader2.textContent = "Dist";
      exerciseHeader3.textContent = "Units";
      exerciseHeader4.textContent = "Time";
    } else {
      console.log(`CANT GET WORKOUT TYPE:${workoutTypeSelect.value}`);
    }
    workoutTypeSelect.addEventListener("change", function () {
      if (workoutTypeSelect.value === "Weight Training") {
        exerciseHeader2.textContent = "Sets";
        exerciseHeader3.textContent = "Reps";
        exerciseHeader4.textContent = "Weight";
      } else if (workoutTypeSelect.value === "Cardio") {
        exerciseHeader2.textContent = "Dist";
        exerciseHeader3.textContent = "Units";
        exerciseHeader4.textContent = "Time";
      } else {
        console.log(`CANT GET WORKOUT TYPE:${workoutTypeSelect.value}`);
      }
    });

    //////////////////////////////////

    const addExerciseButton = document.getElementById(
      "workouts-workout-add-exercise-button"
    );

    addExerciseButton.addEventListener("click", function (event) {
      event.preventDefault();
      const priorRowOne = document.getElementById(`1row${exerciseRowCount}`);
      const priorRowTwo = document.getElementById(`2row${exerciseRowCount}`);
      const priorRowThree = document.getElementById(`3row${exerciseRowCount}`);
      const priorRowFour = document.getElementById(`4row${exerciseRowCount}`);
      const exerciseError = document.getElementById("workouts-exerciseError");

      if (exerciseRowCount === 0) {
        exerciseRowCount = exerciseRowCount + 1;
        let newWorkoutForm = document.getElementById("new-workout-form");
        let newExerciseRow = `
          <input name="1row${exerciseRowCount}" id="1row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-exercise"></input>
          <input name="2row${exerciseRowCount}" id="2row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-sets">
          </input>
          <input name="3row${exerciseRowCount}" id="3row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-reps">
          </input>
          <input name="4row${exerciseRowCount}" id="4row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-weight">
          </input>
        `;
        let workoutContainers = newWorkoutForm.getElementsByClassName(
          "workouts-workout-exercise-grid"
        );
        for (let i = 0; i < workoutContainers.length; i++) {
          workoutContainers[i].insertAdjacentHTML("beforeend", newExerciseRow);
        }
        openWorkoutForm = true;
        return;
      } else {
        if (priorRowOne.value.trim() === "") {
          priorRowOne.classList.add("errorBorder");
          exerciseError.textContent = "Must supply all fields";
        }
        if (priorRowTwo.value.trim() === "") {
          priorRowTwo.classList.add("errorBorder");
          exerciseError.textContent = "Must supply all fields";
        }
        if (priorRowThree.value.trim() === "") {
          priorRowThree.classList.add("errorBorder");
          exerciseError.textContent = "Must supply all fields";
        }
        if (priorRowFour.value.trim() === "") {
          priorRowFour.classList.add("errorBorder");
          exerciseError.textContent = "Must supply all fields";
        }
        if (
          priorRowOne.value.trim() !== "" &&
          priorRowTwo.value.trim() !== "" &&
          priorRowThree.value.trim() !== "" &&
          priorRowFour.value.trim() !== ""
        ) {
          exerciseError.textContent = "";
          priorRowOne.classList.remove("errorBorder");
          priorRowTwo.classList.remove("errorBorder");
          priorRowThree.classList.remove("errorBorder");
          priorRowFour.classList.remove("errorBorder");

          exerciseRowCount = exerciseRowCount + 1;
          let newWorkoutForm = document.getElementById("new-workout-form");
          let newExerciseRow = `
          <input id="1row${exerciseRowCount}" name="1row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-exercise"></input>
          <input id="2row${exerciseRowCount}" name="2row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-sets">
          </input>
          <input id="3row${exerciseRowCount}" name="3row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-reps">
          </input>
          <input id="4row${exerciseRowCount}" name="4row${exerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-weight">
          </input>
        `;
          let workoutContainers = newWorkoutForm.getElementsByClassName(
            "workouts-workout-exercise-grid"
          );
          for (let i = 0; i < workoutContainers.length; i++) {
            workoutContainers[i].insertAdjacentHTML(
              "beforeend",
              newExerciseRow
            );
          }
          openWorkoutForm = true;
          return;
        }
      }
    });

    const cancelNewWorkoutButton = document.getElementById(
      "cancelNewWorkoutButton"
    );

    cancelNewWorkoutButton.addEventListener("click", function (event) {
      exerciseRowCount = 0;
      const noWorkoutsElement = document.getElementById(
        "workouts-no-workouts-yet"
      );
      if (noWorkoutsElement) {
        noWorkoutsElement.textContent = "No workouts yet";
      }
      openWorkoutForm = false;
      event.preventDefault();
      let newWorkoutForm = document.getElementById("new-workout-form");
      newWorkoutForm.remove();
    });

    ////// data validation for header
    const newWorkoutFormElement = document.getElementById("new-workout-form");
    if (newWorkoutFormElement !== null) {
      newWorkoutFormElement.addEventListener("submit", (event) => {
        if (!isFormValid()) {
          const caloriesBurnedInput = document.getElementById("caloriesBurned");
          const caloriesBurnedError = document.getElementById(
            "workouts-caloriesBurnedError"
          );
          if (caloriesBurnedError !== null) {
            caloriesBurnedInput.addEventListener("input", function () {
              caloriesBurnedError.textContent = "";
              caloriesBurnedInput.classList.remove("errorBorder");
            });
          }
          const dateInput = document.getElementById("date");
          const dateError = document.getElementById("workouts-dateError");
          if (dateError !== null) {
            dateInput.addEventListener("input", function () {
              dateError.textContent = "";
              dateInput.classList.remove("errorBorder");
            });
          }
          const timeInputH = document.getElementById("timeElapsedH");
          const timeInputM = document.getElementById("timeElapsedM");
          const timeInputS = document.getElementById("timeElapsedS");
          const timeError = document.getElementById(
            "workouts-timeElapsedError"
          );
          if (timeError !== null) {
            timeInputH.addEventListener("input", function () {
              timeError.textContent = "";
              timeInputH.classList.remove("errorBorder");
            });
            timeInputM.addEventListener("input", function () {
              timeError.textContent = "";
              timeInputM.classList.remove("errorBorder");
            });
            timeInputS.addEventListener("input", function () {
              timeError.textContent = "";
              timeInputS.classList.remove("errorBorder");
            });
          }
          const commentsInput = document.getElementById("comments");
          const commentsError = document.getElementById(
            "workouts-commentsError"
          );
          if (commentsError !== null) {
            commentsInput.addEventListener("input", function () {
              commentsError.textContent = "";
              commentsInput.classList.remove("errorBorder");
            });
          }
          event.preventDefault();
        }
      });
    }

    function isFormValid() {
      let badFields = false;

      //// calories
      const caloriesBurnedElement = document.getElementById("caloriesBurned");
      if (caloriesBurnedElement !== null) {
        let caloriesBurnedValue = caloriesBurnedElement.value;
        let caloriesBurnedError = document.getElementById(
          "workouts-caloriesBurnedError"
        );
        if (isNaN(caloriesBurnedValue)) {
          caloriesBurnedError.textContent = "Calories must be a number";
          caloriesBurnedElement.classList.add("errorBorder");
          badFields = true;
        }
        caloriesBurnedValue.trim();
        if (caloriesBurnedValue === "") {
          caloriesBurnedError.textContent = "Must enter calories burned";
          caloriesBurnedElement.classList.add("errorBorder");
          badFields = true;
        }
        if (parseInt(caloriesBurnedValue) < 0) {
          caloriesBurnedError.textContent =
            "Calories burned cannot be negative";
          caloriesBurnedElement.classList.add("errorBorder");
          badFields = true;
        }
        if (parseInt(caloriesBurnedValue) > 4000) {
          caloriesBurnedError.textContent =
            "Calories burned cannot be over 4000";
          caloriesBurnedElement.classList.add("errorBorder");
          badFields = true;
        }
      }

      ///// Date
      const dateElement = document.getElementById("date");

      if (dateElement !== null) {
        let dateValue = dateElement.value;
        let dateError = document.getElementById("workouts-dateError");

        dateValue.trim();
        if (dateValue === "") {
          dateError.textContent = "Must enter a date";
          dateElement.classList.add("errorBorder");
          badFields = true;
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
          dateError.textContent = "Date must be in form YYYY-MM-DD";
          dateElement.classList.add("errorBorder");
          badFields = true;
        } else {
          const momentDate = moment(dateValue, "YYYY-MM-DD", true);

          if (
            !momentDate.isValid() ||
            !momentDate.isSameOrBefore(moment(), "day")
          ) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }

          let dateArr = dateValue.split("-");
          let dateY = parseInt(dateArr[0]);
          let dateM = parseInt(dateArr[1]);
          let dateD = parseInt(dateArr[2]);

          if (dateY > 2024) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }
          if (dateY < 2014) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }
          if (dateM < 0) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }
          if (dateM > 12) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }
          if (dateD < 0) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }
          if (dateD > 31) {
            dateError.textContent = "Invalid Date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }

          let currentDate = new Date();
          let currYear = currentDate.getFullYear();
          let currMonth = currentDate.getMonth() + 1;
          let currDay = currentDate.getDate();

          if (dateY === currYear) {
            if (dateM > currMonth) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            } else if (dateM === currMonth) {
              if (dateD > currDay) {
                dateError.textContent = "Invalid Date";
                dateElement.classList.add("errorBorder");
                badFields = true;
              }
            }
          }
        }
      }

      ///// Time Elapsed
      const timeElementH = document.getElementById("timeElapsedH");
      const timeElementM = document.getElementById("timeElapsedM");
      const timeElementS = document.getElementById("timeElapsedS");

      if (timeElementH !== null) {
        let timeElementHValue = timeElementH.value.trim();
        let timeElementMValue = timeElementM.value.trim();
        let timeElementSValue = timeElementS.value.trim();
        let timeElapsedError = document.getElementById(
          "workouts-timeElapsedError"
        );

        // timeElementHValue = timeElementHValue.trim();
        // timeElementMValue = timeElementMValue.trim();
        // timeElementSValue = timeElementSValue.trim();
        if (timeElementHValue === "") {
          timeElapsedError.textContent = "Invalid time";
          timeElementH.classList.add("errorBorder");
          badFields = true;
        }
        if (timeElementMValue === "") {
          timeElapsedError.textContent = "Invalid time";
          timeElementM.classList.add("errorBorder");
          badFields = true;
        }
        if (timeElementSValue === "") {
          timeElapsedError.textContent = "Invalid time";
          timeElementS.classList.add("errorBorder");
          badFields = true;
        }
        if (isNaN(timeElementHValue)) {
          timeElapsedError.textContent = "Invalid time";
          timeElementH.classList.add("errorBorder");
          badFields = true;
        }
        if (isNaN(timeElementMValue)) {
          timeElapsedError.textContent = "Invalid time";
          timeElementM.classList.add("errorBorder");
          badFields = true;
        }
        if (isNaN(timeElementSValue)) {
          timeElapsedError.textContent = "Invalid time";
          timeElementS.classList.add("errorBorder");
          badFields = true;
        }
        if (timeElementHValue.length > 2) {
          timeElapsedError.textContent = "Invalid time";
          timeElementH.classList.add("errorBorder");
          badFields = true;
        }
        if (timeElementMValue.length > 2) {
          timeElapsedError.textContent = "Invalid time";
          timeElementM.classList.add("errorBorder");
          badFields = true;
        }
        if (timeElementSValue.length > 2) {
          timeElapsedError.textContent = "Invalid time";
          timeElementS.classList.add("errorBorder");
          badFields = true;
        }
        if (
          parseInt(timeElementHValue) === 0 &&
          parseInt(timeElementMValue) === 0 &&
          parseInt(timeElementSValue) === 0
        ) {
          timeElapsedError.textContent = "Must enter a time";
          timeElementH.classList.add("errorBorder");
          timeElementM.classList.add("errorBorder");
          timeElementS.classList.add("errorBorder");
          badFields = true;
        }
        if (parseInt(timeElementHValue) > 23) {
          timeElapsedError.textContent = "Hours cannot be over 23";
          timeElementH.classList.add("errorBorder");
          badFields = true;
        }
        if (parseInt(timeElementMValue) > 59) {
          timeElapsedError.textContent =
            "Minutes and Seconds cannot be over 59";
          timeElementM.classList.add("errorBorder");
          badFields = true;
        }
        if (parseInt(timeElementSValue) > 59) {
          timeElapsedError.textContent =
            "Minutes and Seconds cannot be over 59";
          timeElementS.classList.add("errorBorder");
          badFields = true;
        }
      }

      //// exercises
      const exerciseGrid = document.getElementById(
        "workouts-new-workout-exercise-grid"
      );
      if (exerciseGrid !== null) {
        const exerciseGridFields = exerciseGrid.getElementsByClassName(
          "workouts-workout-exercise-grid-item"
        );
        let exerciseError = document.getElementById("workouts-exerciseError");
        if (exerciseGridFields.length === 0) {
          exerciseError.textContent = "Must add an exercise";
          badFields = true;
        } else {
          exerciseError.textContent = "";
          for (let i = 0; i < exerciseGridFields.length; i++) {
            exerciseGridFields[i].classList.remove("errorBorder");
          }
          let emptyIndices = [];
          for (let i = 0; i < exerciseGridFields.length; i += 4) {
            let emptyCount = 0;
            for (let j = i; j < i + 4; j++) {
              if (exerciseGridFields[j].value.trim() === "") {
                emptyCount++;
                exerciseGridFields[j].classList.add("errorBorder");
                exerciseError.textContent = "Individual fields can't be empty";
              }
              if (
                parseInt(exerciseGridFields[j].value.trim()) === 0 &&
                (j % 4 === 1 || j % 4 === 2)
              ) {
                emptyCount++;
                exerciseGridFields[j].classList.add("errorBorder");
                exerciseError.textContent = "Fields cannot be 0";
                badFields = true;
              }
              /* if (
                /\D/.test(exerciseGridFields[j].value.trim()) &&
                (j % 4 === 1 || j % 4 === 2)
              ) {
                exerciseGridFields[j].classList.add("errorBorder");
                exerciseError.textContent = "Fields cannot have decimals";
                badFields = true;
              } */
              if (
                !/[a-zA-Z]/.test(exerciseGridFields[j].value.trim()) &&
                j % 4 === 0
              ) {
                exerciseGridFields[j].classList.add("errorBorder");
                exerciseError.textContent = "Exercise must contain a letter";
                badFields = true;
              }
            }
            if (emptyCount === 4) {
              for (let j = i; j < i + 4; j++) {
                emptyIndices.push(exerciseGridFields[j].id);
                exerciseGridFields[j].classList.remove("errorBorder");
                exerciseError.textContent = "";
              }
              exerciseRowCount = exerciseRowCount - 1;
            } else if (
              emptyCount === 1 ||
              emptyCount === 2 ||
              emptyCount === 3
            ) {
              badFields = true;
            }
          }
          emptyIndices.forEach((id) => {
            document.getElementById(id).remove();
          });
        }
      }

      //// comments
      const commentsElement = document.getElementById("comments");
      if (commentsElement !== null) {
        let commentsValue = commentsElement.value;
        let commentsError = document.getElementById("workouts-commentsError");
        if (typeof commentsValue !== "string") {
          commentsError.textContent = "Comments must be a string";
          commentsElement.classList.add("errorBorder");
          badFields = true;
        }
        commentsValue.trim();
      }

      ////////
      if (badFields === true) {
        return false;
      } else {
        return true;
      }
    }

    return;
  }
});

/* EDIT WORKOUT BUTTON */
let editFormHTML = `
<form action="/workouts" method="POST" name="workouts-workout-update-form" id="workouts-workout-update-form" class="workouts-workout-individual">
</form>
`;

const editButtons = document.querySelectorAll(".workouts-workout-edit-button");
let editExerciseRowCount = 0;

editButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (openWorkoutForm === true || editButtonAlreadyOpen === true) {
      return;
    } else {
      const parent = this.closest(".workouts-workout-individual");
      if (parent) {
        parent.classList.remove("workouts-workout-individual");
        editButtonAlreadyOpen = true;
        /* GET ALL OLD VALUES */
        ///// old workout type
        const oldWorkoutTypeElement = parent.querySelector(
          ".workouts-workout-type"
        );
        const oldWorkoutTypeVal = oldWorkoutTypeElement.textContent;

        ///// old calories
        const oldCaloriesElement = parent.querySelector(
          ".workouts-workout-cals"
        );
        const oldCaloriesArr = oldCaloriesElement.textContent.split(" ");
        const oldCaloriesVal = oldCaloriesArr[0];

        //// old date
        const oldDateElement = parent.querySelector(".workouts-workout-date");
        const oldDateArr = oldDateElement.textContent.split("/");
        const oldDateVal = `${oldDateArr[2]}-${oldDateArr[0]}-${oldDateArr[1]}`;

        //// old time
        const oldTimeElement = parent.querySelector(".workouts-workout-time");
        const oldTimeArr = oldTimeElement.textContent.split(":");
        const oldTimeValH = oldTimeArr[0];
        const oldTimeValM = oldTimeArr[1];
        const oldTimeValS = oldTimeArr[2];

        //// old exercise headers
        const oldExerciseHeaderElement = parent.querySelector(
          ".workouts-workout-exercise-grid-item-header.grid-exercise"
        );
        const oldExerciseHeaderVal = oldExerciseHeaderElement.textContent;

        const oldSetsHeaderElement = parent.querySelector(
          ".workouts-workout-exercise-grid-item-header.grid-sets"
        );
        const oldSetsHeaderVal = oldSetsHeaderElement.textContent;

        const oldRepsHeaderElement = parent.querySelector(
          ".workouts-workout-exercise-grid-item-header.grid-reps"
        );
        const oldRepsHeaderVal = oldRepsHeaderElement.textContent;

        const oldWeightHeaderElement = parent.querySelector(
          ".workouts-workout-exercise-grid-item-header.grid-weight"
        );
        const oldWeightHeaderVal = oldWeightHeaderElement.textContent;

        //// old comment
        const oldCommentElement = parent.querySelector(
          ".workouts-workout-comment-content"
        );
        const oldCommentVal = oldCommentElement.textContent;

        //// old exercises
        let oldExerciseNamesElements = parent.querySelectorAll(
          ".workouts-workout-exercise-grid-item.grid-exercise"
        );
        let oldExerciseNamesValsArr = [];
        oldExerciseNamesElements.forEach((elem) => {
          oldExerciseNamesValsArr.push(elem.textContent);
        });
        let oldExerciseSetsElements = parent.querySelectorAll(
          ".workouts-workout-exercise-grid-item.grid-sets"
        );
        let oldExerciseSetsValsArr = [];
        oldExerciseSetsElements.forEach((elem) => {
          oldExerciseSetsValsArr.push(elem.textContent);
        });
        let oldExerciseRepsElements = parent.querySelectorAll(
          ".workouts-workout-exercise-grid-item.grid-reps"
        );
        let oldExerciseRepsValsArr = [];
        oldExerciseRepsElements.forEach((elem) => {
          oldExerciseRepsValsArr.push(elem.textContent);
        });
        let oldExerciseWeightsElements = parent.querySelectorAll(
          ".workouts-workout-exercise-grid-item.grid-weight"
        );
        let oldExerciseWeightsValsArr = [];
        oldExerciseWeightsElements.forEach((elem) => {
          oldExerciseWeightsValsArr.push(elem.textContent);
        });
        /* START MODIFING HTML */

        parent.innerHTML = editFormHTML;

        const workoutID = parent.id;
        const form = document.getElementById("workouts-workout-update-form");
        form.action = `/workouts/${workoutID}`;

        if (oldWorkoutTypeVal === "Cardio") {
          let workoutTitleHTML = `
          <div class="workouts-workout-title">
            <select id="workoutType" name="workoutType" class="workouts-workout-type">
              <option value="Cardio">Cardio</option>
              <option value="Weight Training">Weight Training</option>
            </select>
            <input id="caloriesBurned" name="caloriesBurned" type="text" value="${oldCaloriesVal}" class="workouts-workout-cals">cal</input>
          </div>
          <div id="workouts-caloriesBurnedError"></div>
          `;
          document.getElementById("workouts-workout-update-form").innerHTML =
            workoutTitleHTML;
        } else {
          let workoutTitleHTML = `
          <div class="workouts-workout-title">
            <select id="workoutType" name="workoutType" class="workouts-workout-type">
              <option value="Weight Training">Weight Training</option>
              <option value="Cardio">Cardio</option>
            </select>
            <input id="caloriesBurned" name="caloriesBurned" type="text" value="${oldCaloriesVal}" class="workouts-workout-cals">cal</input>
          </div>
          <div id="workouts-caloriesBurnedError"></div>
          `;
          document.getElementById("workouts-workout-update-form").innerHTML =
            workoutTitleHTML;
        }

        let workoutSubtitleHTML = `
        <div class="workouts-workout-subtitle">
          <input id="date" name="date" type="date" value="${oldDateVal}" class="workouts-workout-date"></input>
          <div class=workouts-workout-time>
            Time Elapsed:
            <input id="timeElapsedH" name="timeElapsedH" type="text" value="${oldTimeValH}" placeholder="HH" >:</input>
            <input id="timeElapsedM" name="timeElapsedM" type="text" value="${oldTimeValM}" placeholder="MM" >:</input>
            <input id="timeElapsedS" name="timeElapsedS" type="text" value="${oldTimeValS}" placeholder="SS" ></input>
          </div>
        </div>
        <div id="workouts-subtitleError-container">
          <div id="workouts-dateError"></div>
          <div id="workouts-timeElapsedError"></div>
        </div>
        `;
        document
          .getElementById("workouts-workout-update-form")
          .insertAdjacentHTML("beforeend", workoutSubtitleHTML);

        let workoutExerciseGridHTML = `
        <button id="workouts-workout-add-exercise-button">Add an exercise +</button>
        <div id="workouts-new-workout-exercise-grid" class="workouts-workout-exercise-grid">
          <div class="workouts-workout-exercise-grid-item-header grid-exercise">${oldExerciseHeaderVal}</div>
          <div id="exercise-title-2" class="workouts-workout-exercise-grid-item-header grid-sets">${oldSetsHeaderVal}</div>
          <div id="exercise-title-3"  class="workouts-workout-exercise-grid-item-header grid-reps">${oldRepsHeaderVal}</div>
          <div id="exercise-title-4" class="workouts-workout-exercise-grid-item-header grid-weight">${oldWeightHeaderVal}</div>
        </div>
        <div id="workouts-exerciseError"></div>
        `;
        document
          .getElementById("workouts-workout-update-form")
          .insertAdjacentHTML("beforeend", workoutExerciseGridHTML);

        if (oldExerciseNamesValsArr.length === 0) {
        } else {
          for (let i = 0; i < oldExerciseNamesValsArr.length; i++) {
            let workoutExerciseHTML = `
            <input name="1row${i}" id="1row${i}" value="${oldExerciseNamesValsArr[
              i
            ].trim()}" type="text" class="workouts-workout-exercise-grid-item grid-exercise"></input>
            <input name="2row${i}" id="2row${i}" value="${oldExerciseSetsValsArr[
              i
            ].trim()}" type="text" class="workouts-workout-exercise-grid-item grid-sets">
            </input>
            <input name="3row${i}" id="3row${i}" value="${oldExerciseRepsValsArr[
              i
            ].trim()}" type="text" class="workouts-workout-exercise-grid-item grid-reps">
            </input>
            <input name="4row${i}" id="4row${i}" value="${oldExerciseWeightsValsArr[
              i
            ].trim()}" type="text" class="workouts-workout-exercise-grid-item grid-weight">
            </input>
            `;
            document
              .getElementById("workouts-new-workout-exercise-grid")
              .insertAdjacentHTML("beforeend", workoutExerciseHTML);
            editExerciseRowCount = i;
          }
        }

        let workoutCommentHTML = `
        <div class="workouts-workout-comment-container">
          <div class="workouts-workout-comment-header">Notes</div>
          <textarea name="comments" id="comments" class="workouts-workout-comment-content"></textarea>
        </div>
        <div id="workouts-commentsError"></div>
        `;
        document
          .getElementById("workouts-workout-update-form")
          .insertAdjacentHTML("beforeend", workoutCommentHTML);
        document.getElementById("comments").value = oldCommentVal;

        let workoutButtonsBottomHTML = `
        <div class="workouts-workout-button-container">
          <button id="cancelNewWorkoutButton" class="workouts-workout-delete-button flex toWhite">
            <img src="/public/images/xIcon.png">
          </button>
          <button id="doneWorkoutButton" name="doneWorkoutButton" type="submit" class="workouts-workout-done-button flex">Done</button>
        </div>
        `;
        document
          .getElementById("workouts-workout-update-form")
          .insertAdjacentHTML("beforeend", workoutButtonsBottomHTML);
      }

      ////////////////////////////// ADD EXERCISE BUTTON HERE
      const addExerciseButton = document.getElementById(
        "workouts-workout-add-exercise-button"
      );

      addExerciseButton.addEventListener("click", function (event) {
        event.preventDefault();
        const priorRowOne = document.getElementById(
          `1row${editExerciseRowCount}`
        );
        const priorRowTwo = document.getElementById(
          `2row${editExerciseRowCount}`
        );
        const priorRowThree = document.getElementById(
          `3row${editExerciseRowCount}`
        );
        const priorRowFour = document.getElementById(
          `4row${editExerciseRowCount}`
        );
        const exerciseError = document.getElementById("workouts-exerciseError");

        if (editExerciseRowCount === 0) {
          editExerciseRowCount = editExerciseRowCount + 1;
          /* let newWorkoutForm = document.getElementById("new-workout-form"); */
          let newExerciseRow = `
            <input name="1row${editExerciseRowCount}" id="1row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-exercise"></input>
            <input name="2row${editExerciseRowCount}" id="2row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-sets">
            </input>
            <input name="3row${editExerciseRowCount}" id="3row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-reps">
            </input>
            <input name="4row${editExerciseRowCount}" id="4row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-weight">
            </input>
          `;
          document
            .getElementById("workouts-new-workout-exercise-grid")
            .insertAdjacentHTML("beforeend", newExerciseRow);
          openWorkoutForm = true;
          return;
        } else {
          if (priorRowOne.value.trim() === "") {
            priorRowOne.classList.add("errorBorder");
            exerciseError.textContent = "Must supply all fields";
          }
          if (priorRowTwo.value.trim() === "") {
            priorRowTwo.classList.add("errorBorder");
            exerciseError.textContent = "Must supply all fields";
          }
          if (priorRowThree.value.trim() === "") {
            priorRowThree.classList.add("errorBorder");
            exerciseError.textContent = "Must supply all fields";
          }
          if (priorRowFour.value.trim() === "") {
            priorRowFour.classList.add("errorBorder");
            exerciseError.textContent = "Must supply all fields";
          }
          if (
            priorRowOne.value.trim() !== "" &&
            priorRowTwo.value.trim() !== "" &&
            priorRowThree.value.trim() !== "" &&
            priorRowFour.value.trim() !== ""
          ) {
            exerciseError.textContent = "";
            priorRowOne.classList.remove("errorBorder");
            priorRowTwo.classList.remove("errorBorder");
            priorRowThree.classList.remove("errorBorder");
            priorRowFour.classList.remove("errorBorder");

            editExerciseRowCount = editExerciseRowCount + 1;
            /* let newWorkoutForm = document.getElementById("new-workout-form"); */
            let newExerciseRow = `
            <input id="1row${editExerciseRowCount}" name="1row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-exercise"></input>
            <input id="2row${editExerciseRowCount}" name="2row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-sets">
            </input>
            <input id="3row${editExerciseRowCount}" name="3row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-reps">
            </input>
            <input id="4row${editExerciseRowCount}" name="4row${editExerciseRowCount}" type="text" class="workouts-workout-exercise-grid-item grid-weight">
            </input>
          `;
            document
              .getElementById("workouts-new-workout-exercise-grid")
              .insertAdjacentHTML("beforeend", newExerciseRow);
            openWorkoutForm = true;
            return;
          }
        }
      });
      //////////////////////////////////////////////////////////////////
      const cancelNewWorkoutButton = document.getElementById(
        "cancelNewWorkoutButton"
      );

      cancelNewWorkoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        location.reload();
      });

      ////// data validation for header
      const updateWorkoutFormElement = document.getElementById(
        "workouts-workout-update-form"
      );
      if (updateWorkoutFormElement !== null) {
        updateWorkoutFormElement.addEventListener("submit", (event) => {
          if (!isFormValid()) {
            const caloriesBurnedInput =
              document.getElementById("caloriesBurned");
            const caloriesBurnedError = document.getElementById(
              "workouts-caloriesBurnedError"
            );
            if (caloriesBurnedError !== null) {
              caloriesBurnedInput.addEventListener("input", function () {
                caloriesBurnedError.textContent = "";
                caloriesBurnedInput.classList.remove("errorBorder");
              });
            }
            const dateInput = document.getElementById("date");
            const dateError = document.getElementById("workouts-dateError");
            if (dateError !== null) {
              dateInput.addEventListener("input", function () {
                dateError.textContent = "";
                dateInput.classList.remove("errorBorder");
              });
            }
            const timeInputH = document.getElementById("timeElapsedH");
            const timeInputM = document.getElementById("timeElapsedM");
            const timeInputS = document.getElementById("timeElapsedS");
            const timeError = document.getElementById(
              "workouts-timeElapsedError"
            );
            if (timeError !== null) {
              timeInputH.addEventListener("input", function () {
                timeError.textContent = "";
                timeInputH.classList.remove("errorBorder");
              });
              timeInputM.addEventListener("input", function () {
                timeError.textContent = "";
                timeInputM.classList.remove("errorBorder");
              });
              timeInputS.addEventListener("input", function () {
                timeError.textContent = "";
                timeInputS.classList.remove("errorBorder");
              });
            }
            const commentsInput = document.getElementById("comments");
            const commentsError = document.getElementById(
              "workouts-commentsError"
            );
            if (commentsError !== null) {
              commentsInput.addEventListener("input", function () {
                commentsError.textContent = "";
                commentsInput.classList.remove("errorBorder");
              });
            }
            event.preventDefault();
          }
        });
      }

      function isFormValid() {
        let badFields = false;

        //// calories
        const caloriesBurnedElement = document.getElementById("caloriesBurned");
        if (caloriesBurnedElement !== null) {
          let caloriesBurnedValue = caloriesBurnedElement.value;
          let caloriesBurnedError = document.getElementById(
            "workouts-caloriesBurnedError"
          );
          if (isNaN(caloriesBurnedValue)) {
            caloriesBurnedError.textContent = "Calories must be a number";
            caloriesBurnedElement.classList.add("errorBorder");
            badFields = true;
          }
          caloriesBurnedValue.trim();
          if (caloriesBurnedValue === "") {
            caloriesBurnedError.textContent = "Must enter calories burned";
            caloriesBurnedElement.classList.add("errorBorder");
            badFields = true;
          }
          if (parseInt(caloriesBurnedValue) < 0) {
            caloriesBurnedError.textContent =
              "Calories burned cannot be negative";
            caloriesBurnedElement.classList.add("errorBorder");
            badFields = true;
          }
          if (parseInt(caloriesBurnedValue) > 4000) {
            caloriesBurnedError.textContent =
              "Calories burned cannot be over 4000";
            caloriesBurnedElement.classList.add("errorBorder");
            badFields = true;
          }
        }

        ///// Date
        const dateElement = document.getElementById("date");

        if (dateElement !== null) {
          let dateValue = dateElement.value;
          let dateError = document.getElementById("workouts-dateError");

          dateValue.trim();
          if (dateValue === "") {
            dateError.textContent = "Must enter a date";
            dateElement.classList.add("errorBorder");
            badFields = true;
          }

          if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
            dateError.textContent = "Date must be in form YYYY-MM-DD";
            dateElement.classList.add("errorBorder");
            badFields = true;
          } else {
            const momentDate = moment(dateValue, "YYYY-MM-DD", true);

            if (
              !momentDate.isValid() ||
              !momentDate.isSameOrBefore(moment(), "day")
            ) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }

            let dateArr = dateValue.split("-");
            let dateY = parseInt(dateArr[0]);
            let dateM = parseInt(dateArr[1]);
            let dateD = parseInt(dateArr[2]);

            if (dateY > 2024) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }
            if (dateY < 2014) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }
            if (dateM < 0) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }
            if (dateM > 12) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }
            if (dateD < 0) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }
            if (dateD > 31) {
              dateError.textContent = "Invalid Date";
              dateElement.classList.add("errorBorder");
              badFields = true;
            }

            let currentDate = new Date();
            let currYear = currentDate.getFullYear();
            let currMonth = currentDate.getMonth() + 1;
            let currDay = currentDate.getDate();

            if (dateY === currYear) {
              if (dateM > currMonth) {
                dateError.textContent = "Invalid Date";
                dateElement.classList.add("errorBorder");
                badFields = true;
              } else if (dateM === currMonth) {
                if (dateD > currDay) {
                  dateError.textContent = "Invalid Date";
                  dateElement.classList.add("errorBorder");
                  badFields = true;
                }
              }
            }
          }
        }

        ///// Time Elapsed
        const timeElementH = document.getElementById("timeElapsedH");
        const timeElementM = document.getElementById("timeElapsedM");
        const timeElementS = document.getElementById("timeElapsedS");

        if (timeElementH !== null) {
          let timeElementHValue = timeElementH.value;
          let timeElementMValue = timeElementM.value;
          let timeElementSValue = timeElementS.value;
          let timeElapsedError = document.getElementById(
            "workouts-timeElapsedError"
          );

          timeElementHValue.trim();
          timeElementMValue.trim();
          timeElementSValue.trim();
          if (timeElementHValue === "") {
            timeElapsedError.textContent = "Invalid time";
            timeElementH.classList.add("errorBorder");
            badFields = true;
          }
          if (timeElementMValue === "") {
            timeElapsedError.textContent = "Invalid time";
            timeElementM.classList.add("errorBorder");
            badFields = true;
          }
          if (timeElementSValue === "") {
            timeElapsedError.textContent = "Invalid time";
            timeElementS.classList.add("errorBorder");
            badFields = true;
          }
          if (isNaN(timeElementHValue)) {
            timeElapsedError.textContent = "Invalid time";
            timeElementH.classList.add("errorBorder");
            badFields = true;
          }
          if (isNaN(timeElementMValue)) {
            timeElapsedError.textContent = "Invalid time";
            timeElementM.classList.add("errorBorder");
            badFields = true;
          }
          if (isNaN(timeElementSValue)) {
            timeElapsedError.textContent = "Invalid time";
            timeElementS.classList.add("errorBorder");
            badFields = true;
          }
          if (timeElementHValue.length > 2) {
            timeElapsedError.textContent = "Invalid time";
            timeElementH.classList.add("errorBorder");
            badFields = true;
          }
          if (timeElementMValue.length > 2) {
            timeElapsedError.textContent = "Invalid time";
            timeElementM.classList.add("errorBorder");
            badFields = true;
          }
          if (timeElementSValue.length > 2) {
            timeElapsedError.textContent = "Invalid time";
            timeElementS.classList.add("errorBorder");
            badFields = true;
          }
          if (
            parseInt(timeElementHValue) === 0 &&
            parseInt(timeElementMValue) === 0 &&
            parseInt(timeElementSValue) === 0
          ) {
            timeElapsedError.textContent = "Must enter a time";
            timeElementH.classList.add("errorBorder");
            timeElementM.classList.add("errorBorder");
            timeElementS.classList.add("errorBorder");
            badFields = true;
          }
          if (parseInt(timeElementHValue) > 23) {
            timeElapsedError.textContent = "Hours cannot be over 23";
            timeElementH.classList.add("errorBorder");
            badFields = true;
          }
          if (parseInt(timeElementMValue) > 59) {
            timeElapsedError.textContent =
              "Minutes and Seconds cannot be over 59";
            timeElementM.classList.add("errorBorder");
            badFields = true;
          }
          if (parseInt(timeElementSValue) > 59) {
            timeElapsedError.textContent =
              "Minutes and Seconds cannot be over 59";
            timeElementS.classList.add("errorBorder");
            badFields = true;
          }
        }

        //// exercises
        const exerciseGrid = document.getElementById(
          "workouts-new-workout-exercise-grid"
        );
        if (exerciseGrid !== null) {
          const exerciseGridFields = exerciseGrid.getElementsByClassName(
            "workouts-workout-exercise-grid-item"
          );
          let exerciseError = document.getElementById("workouts-exerciseError");
          if (exerciseGridFields.length === 0) {
            exerciseError.textContent = "Must add an exercise";
            badFields = true;
            event.preventDefault();
          } else {
            exerciseError.textContent = "";
            for (let i = 0; i < exerciseGridFields.length; i++) {
              exerciseGridFields[i].classList.remove("errorBorder");
            }
            let emptyIndices = [];
            for (let i = 0; i < exerciseGridFields.length; i += 4) {
              let emptyCount = 0;
              for (let j = i; j < i + 4; j++) {
                if (exerciseGridFields[j].value.trim() === "") {
                  emptyCount++;
                  exerciseGridFields[j].classList.add("errorBorder");
                  exerciseError.textContent =
                    "Individual fields can't be empty";
                }
                if (
                  parseInt(exerciseGridFields[j].value.trim()) === 0 &&
                  (j % 4 === 1 || j % 4 === 2)
                ) {
                  emptyCount++;
                  exerciseGridFields[j].classList.add("errorBorder");
                  exerciseError.textContent = "Fields cannot be 0";
                  badFields = true;
                }
                /* if (
                  /\D/.test(exerciseGridFields[j].value.trim()) &&
                  (j % 4 === 1 || j % 4 === 2)
                ) {
                  exerciseGridFields[j].classList.add("errorBorder");
                  exerciseError.textContent = "Fields cannot have decimals";
                  badFields = true;
                } */
              }
              if (emptyCount === 4) {
                for (let j = i; j < i + 4; j++) {
                  emptyIndices.push(exerciseGridFields[j].id);
                  exerciseGridFields[j].classList.remove("errorBorder");
                  exerciseError.textContent = "";
                }
                editExerciseRowCount = editExerciseRowCount - 1;
              } else if (emptyCount > 0 && emptyCount < 4) {
                badFields = true;
                /* event.preventDefault(); */
              }
            }
            emptyIndices.forEach((id) => {
              document.getElementById(id).remove();
            });
          }
        }

        //// comments
        const commentsElement = document.getElementById("comments");
        if (commentsElement !== null) {
          let commentsValue = commentsElement.value;
          let commentsError = document.getElementById("workouts-commentsError");
          if (typeof commentsValue !== "string") {
            commentsError.textContent = "Comments must be a string";
            commentsElement.classList.add("errorBorder");
            badFields = true;
          }
          commentsValue.trim();
        }

        ////////
        if (badFields === true) {
          return false;
        } else {
          return true;
        }
      }

      return;
    }
  });
});
