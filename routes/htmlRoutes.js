const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");
const { Results } = require("../models");

router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/private");
  res.render("login", { error: req.query.error });
});

router.get("/signup", async (req, res) => {
  console.log("route sign")
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});

router.get("/log", checkAuth, async ({ session: { isLoggedIn, user_id }, query:{time, distance, speed} }, res) => {
  const rides = await Results.getall(user_id)
  console.log("route log")
  res.render("trainingLog", {isLoggedIn, time, distance, speed, rides});
});

router.get("/calculate", checkAuth, ({ session: { isLoggedIn }, query:{time, distance, speed} }, res) => {
  console.log("route calc time",{time})
  res.render("calculate", { isLoggedIn, result: time, distance, speed});
});

router.get("/public/images", async (res, req) => {
  res.render("images", { error: req.query.error})
})

//router.get("/res", async ({session: { id }} , res) => {
 // router.get("/res", async (req, res) => { 
 // console.log("route res")
 // res.render("images", { error: req.query.error})
//})


module.exports = router;
