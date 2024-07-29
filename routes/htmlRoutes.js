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

router.get("/log", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/log");
  res.render("login", { error: req.query.error });
});

router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  console.log("route priv")
  res.render("calculate", { isLoggedIn });
});

router.get("/calculate", async (req,res) => {
  console.log("route calc result", res.time)
  res.render("calculate", { result: null});
});




module.exports = router;
