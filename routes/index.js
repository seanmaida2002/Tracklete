import workoutRoutes from "./workouts.js";
import profileRoutes from "./users.js";
import homeRoutes from "./home.js";
import authRoutes from "./auth_routes.js";
import leaderboardRoutes from "./leaderboard.js";
import progressRoutes from "./progress.js";
import calorieRoutes from "./calorie-data.js";
import timeRoutes from "./workoutTime.js";
import feedRoutes from "./feed.js";
import path from "path";

const constructorMethod = (app) => {
  app.use("/", authRoutes);
  app.use("/home", homeRoutes);
  app.use("/workouts", workoutRoutes);
  app.use("/profile", profileRoutes);
  app.use("/feed", feedRoutes);
  app.use("/leaderboard", leaderboardRoutes);
  app.use("/progress", progressRoutes)
  app.use("/calorie-data", calorieRoutes);
  app.use("/time-data", timeRoutes);

  app.use("*", (req, res) => {
    const errorMessage = `404 Error: Route not found`;
    res.status(404).render("error", { errorMessage });
  });
};

export default constructorMethod;
