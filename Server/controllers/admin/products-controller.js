const { imageUploadUtil } = require("../../helper/cloudinary");

const handleImageUpload = async (req, res) => {
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

module.exports = {
  handleImageUpload,
};
