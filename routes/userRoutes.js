const express = require("express");

const router = express.Router();

// Import Controllers
const {
  getAllUsers,
  addUser,
  getUserById,
} = require("../controllers/userController");

// Routes
router.get("/", getAllUsers);

router.post("/", addUser);

router.get("/:id", getUserById);

module.exports = router;