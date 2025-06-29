const express = require("express");
const { registerUser } = require("../../controllers/auth/auth-contoller");

const router = express.Router();


router.post("/resister", registerUser);

module.exports = router;