// /models/Loan.js
const db = require("../config/db");

class Loan {
  static async createLoan(userName, bookId, dueDate) {
    const [result] = await db.execute(
      "INSERT INTO loans (user_name, book_id, due_date) VALUES (?, ?, ?)",
      [userName, bookId, dueDate]
    );
    return result;
  }

  static async getLoansByUserName(userName) {
    const [rows] = await db.execute("SELECT * FROM loans WHERE user_name = ?", [
      userName,
    ]);
    return rows;
  }

  static async returnBook(loanId) {
    const [result] = await db.execute("DELETE FROM loans WHERE id = ?", [
      loanId,
    ]);
    return result;
  }
}

module.exports = Loan;
