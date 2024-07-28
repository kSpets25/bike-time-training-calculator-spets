const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);



// calculator
router.post('/calculate', (req,res) => {
    const {distance, speed} = req.body;
    if(!distance || speed) {
        return res.render('index', { result: 'please provide both distance and speed.'});
    }
    const time = distance / speed;
    res.render('index', { result: `time required: $(time} hours`});
    console.log('time', time)
});

module.exports = router;
