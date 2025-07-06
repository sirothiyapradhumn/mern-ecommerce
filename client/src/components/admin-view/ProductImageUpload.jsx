import React, { useCallback, useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageLoading,
  setImageLoading,
}) {
  const inputRef = useRef(null);

  const handleImageFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setImageFile(droppedFile);
    }
  };

  const handleFileRemove = () => {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = null; // Clear the file input
    }
  };

  const uploadImageToCloudinary = useCallback(async () => {
    setImageLoading(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    console.log("formData", data.get("my_file"));
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );

    console.log("Image upload response:", response);

    if (response.data?.success) {
      setUploadedImageUrl(response.data.data.url);
      setImageLoading(false);
    }
  }, [imageFile, setImageLoading, setUploadedImageUrl]);

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile, uploadImageToCloudinary]);

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <Label className="text-lg font-semibold mb-2 block">
        Upload Product Image
      </Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center"
      >
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden" // Hide the default file input
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center mt-2 text-gray-500 h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span className="text-sm">Click or drag to upload</span>
          </Label>
        ) : (
          <div className="relative">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded Product"
              className="w-full h-32 object-cover rounded-md "
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-600"
              onClick={handleFileRemove}
            >
              <XIcon className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
