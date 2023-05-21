const express = require("express");

const router = express.Router();

const {
  createTransaction,
  getAllTransaction,
  deleteTransaction
} = require("../controllers/transaction");

router.route("/").post(createTransaction).get(getAllTransaction).delete(deleteTransaction);

module.exports = router;
