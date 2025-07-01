const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/Users");

//resigter
const registerUser = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        success: false,
        message: "User already registered with same email!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, password: hashPassword, email });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User Register successfully",
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// login
const login = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// logout

// auth_middleware

module.exports = { registerUser };
