import { Router } from "express";
const router = Router();

router.route("/").get(async (req, res) => {
  if (req.session.user === undefined) {
    res.render("home", {
      title: "Tracklete | Home",
      navbarLogHREF: "login",
      navbarLogDisplay: "Login",
      divOra: "div",
      hidden: "",
    });
  } else {
    res.render("home", {
      title: "Tracklete | Home",
      divOra: "div",
      hidden: "hidden",
    });
  }
});

export default router;
