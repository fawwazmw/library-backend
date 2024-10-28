// /routes/userRoutes.js
const express = require("express");
const { getProfile, getAllUsers } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware"); // Middleware untuk autentikasi
const router = express.Router();

// Route untuk mendapatkan profil pengguna yang sedang login
router.get("/profile", authMiddleware, getProfile);

// Route untuk mendapatkan daftar pengguna (khusus admin)
router.get("/all", authMiddleware, getAllUsers);

module.exports = router;
