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
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User doesn't exists! Please register.",
      });
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );

    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: "Incorrect password! Please try again.",
      });
    }

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
      },
      "CLIENT_SECRET_KEY",
      {
        expiresIn: "60m",
      }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// logout
const logoutUser = async (req, res) => {
  res.clearCookies("token").json({
    success: true,
    message: "Logout successfully",
  });
};

// auth_middleware
const authMiddleware = async (req, res, next) => {
  console.log("toekn", req.cookies.token);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }

  try {
    const decode = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decode;
    next();
  } catch (e) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
