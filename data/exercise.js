//Location of all of the exercise data functions which is a sub-document of workout

import { ObjectId } from "mongodb";
import { workouts } from "../config/mongoCollections.js";
import { checkString, checkNumber, checkArray, checkTime } from "../helpers.js";

export const createExercise = async (
  workoutId,
  workoutType,
  exerciseName,
  sets,
  reps,
  weight,
  weightUnits,
  distance,
  distanceUnits,
  timeElapsed
) => {
  if (
    workoutId === undefined ||
    workoutType === undefined ||
    exerciseName === undefined ||
    sets === undefined ||
    reps === undefined ||
    weight === undefined ||
    weightUnits === undefined ||
    timeElapsed === undefined ||
    distance === undefined ||
    distanceUnits === undefined
  ) {
    throw `Error: all fields need to be supplied`;
  }
  //Error checking
  checkString(workoutId, "workoutId");
  workoutId = workoutId.trim();
  if (!ObjectId.isValid(workoutId)) {
    throw `Error: workoutId is not a valid ObjectId`;
  }
  checkString(workoutType, "workoutType");
  workoutType = workoutType.trim();
  if (
    workoutType.toLowerCase() != "weight training" &&
    workoutType.toLowerCase() != "calisthenics" &&
    workoutType.toLowerCase() != "cardio"
  ) {
    throw `workoutType must be either weight training or cardio`;
  }
  checkString(exerciseName, "exerciseName");
  exerciseName = exerciseName.trim();
  /* checkNumber(sets, "sets"); */
  /* checkArray(reps, "reps"); */
  /* checkNumber(weight, "weight"); */
  checkString(weightUnits, "weightUnits");
  weightUnits = weightUnits.trim();
  /* checkTime(timeElapsed, "timeElapsed"); */
  timeElapsed = timeElapsed.trim();
  /* checkNumber(distance, "distance"); */
  checkString(distanceUnits, "distanceUnits");
  distanceUnits = distanceUnits.trim();

  const workoutCollection = await workouts();
  const workout = await workoutCollection.findOne({
    _id: new ObjectId(workoutId),
  });
  if (workout === null) {
    throw `Error: no workout with that id`;
  }

  let newExercise = {};
  if (
    workoutType.toLowerCase() === "weight training" ||
    workoutType.toLowerCase() === "calisthenics"
  ) {
    /*     for (let i = 0; i < reps.length; i++) {
      checkNumber(reps[i], "rep");
    }
    if (reps.length != sets) {
      throw `The number of reps should equal the number of sets`;
    } */
    if (
      weightUnits.toLowerCase() !== "lbs" &&
      weightUnits.toLowerCase() !== "kgs"
    ) {
      throw `weightUnits must be in lbs or kgs`;
    }
    newExercise = {
      _id: new ObjectId(),
      exerciseName: exerciseName,
      sets: sets,
      reps: reps,
      weight: weight,
      weightUnits: weightUnits,
      timeElapsed: timeElapsed,
    };
  } else {
    /* if (
      distanceUnits.toLowerCase() !== "mi" &&
      distanceUnits.toLowerCase() !== "km"
    ) {
      throw `distanceUnits must be in mi or km`;
    } */
    newExercise = {
      exerciseName: exerciseName,
      distance: distance,
      distanceUnits: distanceUnits,
      timeElapsed: timeElapsed,
    };
  }

  workout.exercises.push(newExercise);
  await workoutCollection.findOneAndUpdate(
    { _id: new ObjectId(workoutId) },
    { $set: { exercises: workout.exercises } }
  );

  return newExercise;
};

export const getAllExercises = async (workoutId) => {
  if (workoutId === undefined) {
    throw `Error: workoutId must be provided`;
  }
  checkString(workoutId, "workoutId");
  workoutId = workoutId.trim();
  if (!ObjectId.isValid(workoutId)) {
    throw `Error: workoutId is not a valid ObjectId`;
  }

  const workoutCollection = await workouts();
  const workout = await workoutCollection.findOne({
    _id: new ObjectId(workoutId),
  });
  if (workout === null) {
    throw `Error: no workout with that id`;
  }

  return workout.exercises;
};

export const getExercise = async (exerciseId) => {
  if (exerciseId === undefined) {
    throw `Error: exerciseId must be provided`;
  }
  checkString(exerciseId, "exerciseId");
  exerciseId = exerciseId.trim();
  if (!ObjectId.isValid(exerciseId)) {
    throw `Error: exerciseId is not a valid ObjectId`;
  }

  const workoutCollection = await workouts();
  const workout = await workoutCollection.findOne({
    "exercises._id": new ObjectId(exerciseId),
  });
  if (!workout) {
    throw `Error: no workout with that exerciseId`;
  }
  const exercise = workout.exercises.find(
    (e) => e._id.toString() === exerciseId
  );

  if (!exercise) {
    throw `Error: no exercise with that id`;
  }

  return exercise;
};

export const updateExercise = async (exerciseId, updateObject) => {
  if (exerciseId === undefined) {
    throw `Error: exerciseId must be provided`;
  }
  checkString(exerciseId, "exerciseId");
  exerciseId = exerciseId.trim();
  if (!ObjectId.isValid(exerciseId)) {
    throw `Error: exerciseId is not a valid ObjectId`;
  }

  const workoutCollection = await workouts();
  const workout = await workoutCollection.findOne({
    "exercises._id": new ObjectId(exerciseId),
  });
  if (!workout) {
    throw `Error: no workout with that exercise`;
  }
  const exercise = workout.exercises.find(
    (e) => e._id.toString() === exerciseId
  );
  if (!exercise) {
    throw `Error: no exercise found with that id`;
  }

  const i = workout.exercises.findIndex((e) => e._id.toString() === exerciseId);
  const updatedExercise = workout.exercises[i];
  if (updateObject.exerciseName) {
    checkString(updateObject.exerciseName, "exerciseName");
    updatedExercise.exerciseName = updateObject.exerciseName.trim();
  }
  if (updateObject.sets) {
    /* checkNumber(updateObject.sets, "sets"); */
    updatedExercise.sets = updateObject.sets;
  }
  if (updateObject.reps) {
    /* checkArray(updateObject.reps, "reps");
    for (let i = 0; i < updateObject.reps.length; i++) {
      checkNumber(updateObject.reps[i], "rep");
    } */
    updatedExercise.reps = updateObject.reps;
  }
  if (updateObject.weight) {
    /* checkNumber(updateObject.weight, "weight"); */
    updatedExercise.weight = updateObject.weight;
  }
  if (updateObject.weightUnits) {
    checkString(updateObject.weightUnits, "weightUnits");
    updateObject.weightUnits = updateObject.weightUnits.trim();
    /* if (
      updateObject.weightUnits.toLowerCase() !== "lbs" &&
      updateObject.weightUnits.toLowerCase() !== "kgs"
    ) {
      throw `weightUnits must be in lbs or kgs`;
    } */
    updatedExercise.weightUnits = updateObject.weightUnits;
  }
  if (updateObject.timeElapsed) {
    /* checkTime(updateObject.timeElapsed, "timeElapsed"); */
    updatedExercise.timeElapsed = updateObject.timeElapsed.trim();
  }
  if (updateObject.distance) {
    /* checkNumber(updateObject.distance, "distance"); */
    updatedExercise.distance = updateObject.distance;
  }
  if (updateObject.distanceUnits) {
    checkString(updateObject.distanceUnits, "distanceUnits");
    updateObject.distanceUnits = updateObject.distanceUnits.trim();
    /* if (
      updateObject.distanceUnits.toLowerCase() !== "mi" &&
      updateObject.distanceUnits.toLowerCase() !== "km"
    ) {
      throw `distanceUnits must be in mi or km`;
    } */
    updatedExercise.distanceUnits = updateObject.distanceUnits;
  }

  await workoutCollection.findOneAndUpdate(
    { _id: new ObjectId(workout._id) },
    { $set: { exercises: workout.exercise } }
  );

  return workout;
};

export const deleteExercise = async (exerciseId) => {
  if (exerciseId === undefined) {
    throw `Error: exerciseId must be provided`;
  }
  checkString(exerciseId, "exerciseId");
  exerciseId = exerciseId.trim();
  if (!ObjectId.isValid(exerciseId)) {
    throw `Error: exerciseId is not a valid ObjectId`;
  }

  const workoutCollection = await workouts();
  let workout = await workoutCollection.findOne({
    "exercises._id": new ObjectId(exerciseId),
  });
  if (!workout) {
    throw `Error: no workout found with tha exerciseId`;
  }
  const exercise = workout.exercises.find(
    (e) => e._id.toString() === exerciseId
  );
  if (!exercise) {
    throw `Error: no exercise found with that id`;
  }

  workout = await workoutCollection.findOneAndUpdate(
    { _id: new ObjectId(workout._id) },
    { $pull: { exercises: { _id: new ObjectId(exerciseId) } } },
    { returnDocument: "after" }
  );
  if (!workout) {
    throw `Error: could not delete exercise with id of ${exerciseId}`;
  }

  return workout;
};

export const deleteAllExercises = async (workoutId) => {
  if (workoutId === undefined) {
    throw `Error: workoutId must be provided`;
  }
  checkString(workoutId, "workoutId");
  workoutId = workoutId.trim();
  if (!ObjectId.isValid(workoutId)) {
    throw `Error: workoutId is not a valid ObjectId`;
  }

  const workoutCollection = await workouts();
  const workout = await workoutCollection.findOne({
    _id: new ObjectId(workoutId),
  });
  if (workout === null) {
    throw `Error: no workout with that id`;
  }
  await workoutCollection.findOneAndUpdate(
    { _id: new ObjectId(workoutId) },
    { $set: { exercises: [] } },
    { returnDocument: "after" }
  );

  return workout.exercises;
};
