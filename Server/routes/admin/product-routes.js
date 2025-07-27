const express = require("express");
const { upload } = require("../../helper/cloudinary");
const {
  handleImageUpload,
  addProduct,
  fetchAllProduct,
  editProduct,
  deleteProduct,
} = require("../../controllers/admin/products-controller");
const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add-product", addProduct);
router.get("/fetch-all-products", fetchAllProduct);
router.put("/edit-product/:id", editProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
