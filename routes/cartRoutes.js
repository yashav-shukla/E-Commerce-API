const express = require("express");

const router = express.Router();

// Import Controllers
const {
  getCartForUser,
  addProductToCart,
} = require("../controllers/cartController");

// Routes
router.get("/:userId", getCartForUser);

router.post("/:userId", addProductToCart);

module.exports = router;