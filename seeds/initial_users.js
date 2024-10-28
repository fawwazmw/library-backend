// seeds/initial_users.js
const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  const hashedPassword = await bcrypt.hash("password", 8);

  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { username: "admin", password: hashedPassword, role: "admin" },
    { username: "user1", password: hashedPassword, role: "user" },
  ]);
};
