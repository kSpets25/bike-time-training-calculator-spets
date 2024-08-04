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

      return res.redirect(`/calculate?time=${mytime.toFixed(2)}&distance=${distance}&speed=${speed}`);
     
    } catch (err) {
      res.status(500).send(err.message)

    }
  }

  
  async function create (req, res) {
      const user_id = req.session.user_id;
      const {distance, speed, time, ride_date} = req.body
      await Results.create (user_id, distance, speed, time, ride_date) 
      
          //redirect to /trainingLog
        return res.redirect(`/log`)

  }
 
 /* async function update (req, res) {
    const resultsId = req.session.user_id;
    const  results = await Results.findOneAndUpdate(
      {id: resultsId},
      {distance: distance, speed: speed, time: time},
      {new: true}
    )
        return res.redirect(`/log`)
  }

  async function remove (req, res) {
    const targetDate = req.session.user_id.date;
    const deleteQuery = await Results.findOneAndRemove
      {deleteQuery, [user_id, targetDate],
        console.err('Error deleting row', err);
      }
    
      return res.redirect(`log`)
  }
*/
  
module.exports = ({time, create});
