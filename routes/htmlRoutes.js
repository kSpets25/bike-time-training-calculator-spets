const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

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

router.get("/log", checkAuth, async ({ session: { isLoggedIn }, query:{time, distance, speed} }, res) => {

  res.render("trainingLog", {isLoggedIn, time, distance, speed});
});

router.get("/calculate", checkAuth, ({ session: { isLoggedIn }, query:{time, distance, speed} }, res) => {
  console.log("route priv")
  res.render("calculate", { isLoggedIn, result: time, distance, speed});
});





module.exports = router;
