const { Results } = require("../models");
console.log("in results");


async function time(req, res) {

  try {
    const { distance, speed } = req.body;
    console.log("distance", distance, "speed", speed);
    if (!distance || !speed) {
      return res.render('index', { result: 'please provide both distance and speed.' });
    }
    const mytime = distance / speed;
    console.log("mytime", mytime)

    return res.redirect(`/calculate?time=${mytime.toFixed(2)}&distance=${distance}&speed=${speed}`);

  } catch (err) {
    res.status(500).send(err.message)

  }
}


async function create(req, res) {

  try {
    const user_id = req.session.user_id;
    const { distance, speed, time, ride_date } = req.body
    if (!(distance && speed && time && ride_date))
      return res.status(400).send('distance speed time and ride date are required')
    await Results.create(user_id, distance, speed, time, ride_date)
    //redirect to /trainingLog
    return res.redirect(`/log`)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function update(req, res) {
  try {
    const resultsId = req.session.user_id;
    if (!(resultsId))
      return res.status(400).send('no result found')
    const results = await Results.findOneAndUpdate(
      { id: resultsId },
      { distance: distance, speed: speed, time: time },
      { new: true }
    )
    return res.redirect(`/log`)
  } catch (err) {
    res.sttus((500).send(err.message))
  }
}

async function remove(req, res) {
  const deleteRows = await Results.remove(req.params.resultId)
  return res.send(`deleted`)
}


module.exports = ({ time, create, update, remove });
