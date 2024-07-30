const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login",  controllers.auth.login,);
//router.post("/login", {console.log("calc")} );
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);
router.post("/results", controllers.results.time);
router.post("/training-log", controllers.results.create);


module.exports = router;
