const express = require("express");

const router = express.Router();

// Import Controllers
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

// Routes
router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

module.exports = router;