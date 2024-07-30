const { Results } = require("../models/");
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
 async function create(req, res) {
  const {distance, speed} = req.body
  try {
    const newResult = await Results.create ({
      distance,
      speed,
      time
    })
  if (!(title && body)) {
    return res.status(400).send('result must include distance and speed')
  };
  await newResult.save()
  res.status(200).json(Results)
  //redirect to /trainingLog
  return res.redirect(`/calculate?time=${ mytime.toFixed(2)}&distance=${distance}&speed=${speed}`);
  
  } catch {
    res.status(500).send(err.message)
  }
 }

module.exports = ({time, create});
