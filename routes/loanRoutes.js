// /routes/loanRoutes.js
const express = require("express");
const {
  createLoan,
  getLoansByUserName,
} = require("../controllers/loanController");
const router = express.Router();

router.post("/", createLoan); // Route for loan creation without auth
router.get("/:user_name", getLoansByUserName); // Get loans by user name without auth

module.exports = router;
