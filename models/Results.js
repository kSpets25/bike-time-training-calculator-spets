const db = require("../config/connection");


//instead of username and password make the same collums as results table except for id and created_at.
async function create(distance, speed, ride_time) {

  await db.query(`INSERT INTO results (distance, speed, ride_time) VALUES (?, ?, ?)`, [
    distance,
    speed,
    ride_time,
  ]);
}
async function create(username, password) {

  await db.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [
    username,
    hashedPass,
  ]);
}
async function getall (userId) {
  // getall results records by user id
  await db.query(`SELECT * results BY user_Id`)
}
  module.exports = {
    create, create, getall
  };