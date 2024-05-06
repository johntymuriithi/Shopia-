import mongoose, { Schema } from "mongoose";

//Define the User Model | Shopping Cart Model | Product Model

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    address: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Create a Cart Component for the User
const shoppingCartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    totalAmount: { type: Number, default: 0 },
    products: [
      { product: { type: mongoose.Schema.Types.ObjectId }, quantity: Number },
    ],
    isCoupon: { type: Boolean, default: false },
    couponValue: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

// Define the Product Schema
const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    imageUrl: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isSpecialDeal: { type: Boolean, default: false },
    currentPrice: { type: Number, required: true },
    isDiscount: { type: Boolean, default: false },
    discountPercent: { type: Number, default: 0 },
    discountPrice: { type: Number },
    category: [String],
    tag: [String],
    brand: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);

export { User, ShoppingCart, Product };
