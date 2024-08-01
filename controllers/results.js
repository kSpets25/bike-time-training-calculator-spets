const { Results } = require("../models");
console.log("in results");


async function time(req, res) {
  
  console.log("in in results");
  
    try {
      const {distance, speed} = req.body;
      console.log("distance",distance,"speed",speed);
      if(!distance || !speed) {
        console.log("inif")
          return res.render('index', { result: 'please provide both distance and speed.'});
      }
      const mytime = distance / speed;
      console.log("mytime", mytime)

     return res.redirect(`/calculate?time=${ mytime.toFixed(2)}&distance=${distance}&speed=${speed}`);
    } catch (err) {
      res.status(500).send(err.message)

    }
  }
//route function req, res no next/ write new
//get user id from req.session.id 
 async function create (req, res) {
    const user_id = req.session.user_id;
    const {distance, speed, time, ride_date} = req.body
    await Results.create (user_id, distance, speed, time, ride_date) 
        //redirect to /trainingLog
      return res.redirect(`/log`);
    
    };
  
module.exports = ({time, create});
