import { Router } from "express";
const router = Router();

import { getTop20 } from "../data/leaderboard.js";

router.route("/").get(async (req, res) => {
  try {
    const leaderboardArray = await getTop20();

    if (req.session.user === undefined) {
      res.render("leaderboardPage", {
        title: "Tracklete | Leaderboard",
        content: "Content here",
        navbarLogHREF: "login",
        navbarLogDisplay: "Login",
        leaderboardArray: leaderboardArray,
      });
    } else {
      res.render("leaderboardPage", {
        title: "Tracklete | Leaderboard",
        content: "Content here",
        leaderboardArray: leaderboardArray,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).render("500");
  }
});

export default router;
