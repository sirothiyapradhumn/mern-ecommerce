const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../../controllers/auth/auth-contoller");

const router = express.Router();

router.post("/resister", registerUser);
router.post("/login", loginUser);

module.exports = router;
