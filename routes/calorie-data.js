import { Router } from "express";
import { getUserByUsername } from "../data/users.js";
import { getWorkout } from "../data/workouts.js";
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    const currUserData = await getUserByUsername(req.session.user.username);
    let caloriesArray = [];
    for (const workoutId of currUserData.workouts) {
      const workout = await getWorkout(workoutId);
      caloriesArray.push({
        date: workout.date,
        caloriesBurned: workout.caloriesBurned,
      });
    }
    res.json(caloriesArray);
  } catch (e) {
    console.log(e);
    res.status(500).render("500");
  }
});

export default router;
