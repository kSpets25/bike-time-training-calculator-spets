const db = require("../config/connection");


//instead of username and password make the same collums as results table except for id and created_at.
async function create(user_id, distance, speed, ride_time, ride_date) {

  await db.query(`INSERT INTO results (user_id, distance, speed, ride_time, ride_date) VALUES (?, ?, ?, ?, ?)`, [
    user_id,
    distance,
    speed,
    ride_time,
    ride_date
  ]);
}

async function getall (user_id) {
  const [rows] = await db.query(`SELECT distance, speed, ride_time, DATE_FORMAT (ride_date,"%m/%d/%Y") AS ride_date FROM results WHERE user_Id=? ORDER BY ride_date DESC`, [
    user_id
  ])
  return rows
}
  module.exports = {
    create, getall
  };