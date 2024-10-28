// /routes/bookRoutes.js
const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Mendapatkan semua buku tanpa authMiddleware
router.get("/", getAllBooks);

// Mendapatkan detail buku berdasarkan ID dengan authMiddleware
router.get("/:id", authMiddleware, getBookById);

// Menambahkan buku baru dengan authMiddleware
router.post("/", authMiddleware, createBook);

// Mengupdate data buku berdasarkan ID dengan authMiddleware
router.put("/:id", authMiddleware, updateBook);

// Menghapus buku berdasarkan ID dengan authMiddleware
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;
