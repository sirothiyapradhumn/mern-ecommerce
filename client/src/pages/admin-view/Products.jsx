import ProductImageUpload from "@/components/admin-view/ProductImageUpload";
import CommonForm from "@/components/common/CommonForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElement } from "@/config";
import React, { useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  salePrice: "",
  stock: "",
  price: "",
};

function Products() {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);  

  const onSubmit = (event) => {
    event.preventDefault();
    formData.image = uploadedImageUrl;
    console.log("Final Form Data:", formData);
    setOpenAddProduct(false);
  };

  return (
    <>
      <div className="flex justify-end mb-5 w-full">
        <Button onClick={() => setOpenAddProduct(true)}>Add Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet open={openAddProduct} onOpenChange={setOpenAddProduct}>
        <SheetContent
          side="right"
          className="overflow-y-auto w-full"
        >
          <SheetHeader className="border-b">
            <SheetTitle className="text-xl font-semibold ">
              Add New Product
            </SheetTitle>
          </SheetHeader>
          <div className="py-3 px-4">
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              imageLoading={imageLoading}
              setImageLoading={setImageLoading}
            />
            <CommonForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              formControls={addProductFormElement}
              btnText={"Add Product"}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Products;
