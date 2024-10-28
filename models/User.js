// models/User.js
const db = require("../config/db");

class User {
  static async createUser(username, password, role = "user") {
    const sql = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;

    // Log untuk memastikan parameter tidak undefined
    if (!username || !password) {
      throw new Error("Username and password must be provided");
    }

    try {
      const [result] = await db.execute(sql, [username, password, role]);
      return result;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }

  static async getUserByUsername(username) {
    const sql = `SELECT * FROM users WHERE username = ? LIMIT 1`;
    try {
      const [rows] = await db.execute(sql, [username]);
      return rows[0];
    } catch (error) {
      console.error("Error fetching user by username:", error);
      throw error;
    }
  }
}

module.exports = User;
