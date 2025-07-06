const express = require("express");
const mongoose = require("mongoose");
const cookiesParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const adminProductRoutes = require("./routes/admin/product-routes");


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  })
);

app.use(cookiesParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use("/api/admin/products", adminProductRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});