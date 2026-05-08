import express from "express";
import {
  addExpense,
  getExpenses,
  deleteExpense,
} from "../controllers/expenseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add expense
router.post("/", protect, addExpense);

// Get all expenses
router.get("/", protect, getExpenses);

// Delete expense
router.delete("/:id", protect, deleteExpense);

// VERY IMPORTANT
export default router;