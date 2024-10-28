// /controllers/bookController.js
const Book = require("../models/Book");

// Mendapatkan semua buku
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json({ books }); // Wrap the response in an object
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

// Mendapatkan buku berdasarkan ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Failed to fetch book" });
  }
};

// Menambahkan buku baru
exports.createBook = async (req, res) => {
  const { title, author, year } = req.body;
  try {
    await Book.createBook(title, author, year);
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
};

// Mengupdate buku berdasarkan ID
exports.updateBook = async (req, res) => {
  const { title, author, year, available } = req.body;
  try {
    const updated = await Book.updateBook(req.params.id, {
      title,
      author,
      year,
      available,
    });
    if (updated) {
      res.json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Failed to update book" });
  }
};

// Menghapus buku berdasarkan ID
exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.deleteBook(req.params.id);
    if (deleted) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Failed to delete book" });
  }
};
