const bcrypt = require("bcrypt");
const db = require("../config/connection");

async function findByUsername(username) {
    const [[results]] = await db.query(
      `SELECT * FROM users WHERE username=?`,
      username, results
    );
    return user, results;
  }