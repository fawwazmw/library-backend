// /models/Book.js
const db = require("../config/db");

class Book {
  static async getAllBooks() {
    const [rows] = await db.execute("SELECT * FROM books");
    return rows;
  }

  static async getBookById(id) {
    const [rows] = await db.execute("SELECT * FROM books WHERE id = ?", [id]);
    return rows[0];
  }

  static async createBook(title, author, year) {
    const [result] = await db.execute(
      "INSERT INTO books (title, author, year) VALUES (?, ?, ?)",
      [title, author, year]
    );
    return result;
  }

  static async updateBook(id, { title, author, year, available }) {
    const [result] = await db.execute(
      "UPDATE books SET title = ?, author = ?, year = ?, available = ? WHERE id = ?",
      [title, author, year, available, id]
    );
    return result.affectedRows > 0;
  }

  static async deleteBook(id) {
    const [result] = await db.execute("DELETE FROM books WHERE id = ?", [id]);
    return result.affectedRows > 0;
  }
}

// Correct export statement
module.exports = Book;
