// /controllers/loanController.js
const Loan = require("../models/Loan");

exports.createLoan = async (req, res) => {
  const { user_name, book_id, loan_date, due_date } = req.body;

  // Validation to ensure required fields are present
  if (!user_name || !book_id || !loan_date || !due_date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const loan = await Loan.createLoan(user_name, book_id, due_date);
    res.status(201).json({ message: "Loan created successfully", loan });
  } catch (error) {
    console.error("Error creating loan:", error);
    res.status(500).json({ message: "Failed to create loan" });
  }
};

// Optional: Get loans by user name instead of user ID
exports.getLoansByUserName = async (req, res) => {
  const { user_name } = req.params;

  try {
    const loans = await Loan.getLoansByUserName(user_name);
    res.status(200).json(loans);
  } catch (error) {
    console.error("Error retrieving loans:", error);
    res.status(500).json({ message: "Failed to retrieve loans" });
  }
};
