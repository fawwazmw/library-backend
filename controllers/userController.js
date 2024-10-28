// /controllers/userController.js
const User = require("../models/User");

// Mengambil profil pengguna yang sedang login
exports.getProfile = async (req, res) => {
  try {
    const user = await User.getUserById(req.user.userId); // req.user.userId didapatkan dari token JWT
    if (user) {
      res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        created_at: user.created_at,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
};

// Mendapatkan daftar semua pengguna (khusus untuk admin)
exports.getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    const users = await User.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
