const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login",  controllers.auth.login,);
//router.post("/login", {console.log("calc")} );
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);
router.post("/results", controllers.results.time);



// calculator
router.post("/calculate", (req,res) => {
    console.log("calc")
    const {distance, speed} = req.body;
    if(!distance || speed) {
        return res.render('index', { result: 'please provide both distance and speed.'});
    }
    const time = distance / speed;
    res.render('index', { result: `time required: $(time} hours`});
    console.log('time', time)
});

module.exports = router;
