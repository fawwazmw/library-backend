// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const loanRoutes = require("./routes/loanRoutes"); // Add loan routes

const app = express();

// Konfigurasi CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Ganti ini dengan URL frontend jika di-deploy
    credentials: true,
  })
);

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes); // Use loan routes

module.exports = app;
