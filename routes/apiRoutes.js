const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login",  controllers.auth.login,);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);
router.post("/results", controllers.results.time);
router.get("/remove", controllers.results.remove);
router.post("/training-log", controllers.results.create);
router.delete("/training-log/:resultId", controllers.results.remove);


module.exports = router;
