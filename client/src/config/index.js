export const registerFormControls = [
  {
    name: "username",
    label: "User Name",
    placeholder: "Enter your username",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your username",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your username",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElement = [
  {
    name: "title",
    label: "Product Title",
    placeholder: "Enter product title",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter product description",
    componentType: "textarea",
  },
  {
    name: "category",
    label: "Category",
    placeholder: "Select product category",
    componentType: "select",
    options: [
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
      { value: "children", label: "Children" },
      { value: "electronics", label: "Electronics" },
      { value: "accessories", label: "Accessories" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    placeholder: "Select product brand",
    componentType: "select",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "reebok", label: "Reebok" },
      { value: "under-armour", label: "Under Armour" },
      { value: "new-balance", label: "New Balance" },
    ],
  },
  {
    name: "price",
    label: "Price", 
    placeholder: "Enter product price",
    componentType: "input",
    type: "number",
  },
  {
    name: "salePrice",
    label: "Sale Price",
    placeholder: "Enter product sale price",
    componentType: "input",
    type: "number",
  },
  {
    name: "stock",
    label: "Stock Quantity",
    placeholder: "Enter stock quantity",
    componentType: "input",
    type: "number",
  },
];
