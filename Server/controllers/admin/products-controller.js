const { imageUploadUtil } = require("../../helper/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  console.log("Received file:", req.file);
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: result,
    });
  } catch (error) {
    console.error("Image upload error:", error);
    res.status(500).json({
      success: false,
      message: "Image upload failed",
      error: error.message,
    });
  }
};

// add a new product
const addProduct = async (req, res) => {
  try {
    const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;
    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      brand,  
      price,
      salePrice,
      totalStock,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newlyCreatedProduct,
    });

  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
}

// fetch all products
const fetchAllProduct = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: listOfProducts,
    });

  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
}

//edit a product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;
    const findProductById = await Product.findById(id);
    if(!findProductById) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } 

    findProductById.image = image || findProductById.image;
    findProductById.title = title || findProductById.title;   
    findProductById.description = description || findProductById.description
    findProductById.category = category || findProductById.category;
    findProductById.brand = brand || findProductById.brand;
    findProductById.price = price || findProductById.price;
    findProductById.salePrice = salePrice || findProductById.salePrice;
    findProductById.totalStock = totalStock || findProductById.totalStock;
    await findProductById.save();
    res.status(200).json({
      success: true,
      message: "Product edited successfully",
      data: findProductById,
    });
    

  } catch (error) {
    console.error("Error editing product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to edit product",
      error: error.message,
    });
  }
}

//delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findProductById = await Product.findById(id);
    if (!findProductById) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
}

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProduct,
  editProduct,
  deleteProduct,
};
