// Authentication Controllers: SignIn || SignOut || SignUp
import bycryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Import Models

import { Product, User } from "../models/models.js";

const uploadProduct = async (req, res, next) => {
  const { description, name, category, currentPrice, imgUrl, brand, adminId } =
    req.body;

  // console.log(req.body);

  const token = req.cookies.vvyyzz;
  // console.log(req.userIdToken, "first print");
  // console.log(adminId, "second print");
  // Verify that adminId is truly an admin
  try {
    const confirmAdmin = await User.findOne({
      _id: req.userIdToken.id,
    });

    // console.log(confirmAdmin, "third print");

    if (!confirmAdmin || confirmAdmin.isAdmin === false)
      return res.status(403).json({
        statusCode: 403,
        message: "Authorization Error. Please try again.",
      });

    // Create the Product
    const newProduct = new Product({
      description,
      name,
      category: category.split(";"),
      currentPrice: +currentPrice,
      imageUrl: imgUrl,
      brand,
    });

    //save new Product
    const saveProduct = await newProduct.save();

    if (!saveProduct)
      return res.status(403).json({
        statusCode: 403,
        message: "Error Occured while Creating Product!",
      });

    // If all things goes well, then return this response
    res
      .status(201)
      .json({ statusCode: 201, message: "Product Successfully Created" });
  } catch (err) {
    res.status(403).json({ statusCode: 403, message: "Unknown Error Occured" });
  }
};

const getProduct = async (req, res, next) => {
  const productId = req.params;

  //console.log(productId);
  // console.log(req.body);
  try {
    const product = await Product.findOne({ _id: productId.id });
    //save new Product

    if (!product)
      return res.status(404).json({
        statusCode: 404,
        message: "Product Not Found.",
      });

    //console.log(product);
    // If all things goes well, then return this response
    res
      .status(200)
      .json({ statusCode: 200, message: "Success!", data: product });
  } catch (err) {
    res
      .status(404)
      .json({ statusCode: 404, message: "Unable to Retrieve Product!" });
  }
};
//
const getAllProduct = async (req, res, next) => {
  // console.log(req.body);
  try {
    const products = await Product.find();

    if (!products)
      return res.status(404).json({
        statusCode: 404,
        message: "Unable to Retrieve Products",
      });
    // console.log(products);
    // If all things goes well, then return this response
    res
      .status(200)
      .json({ statusCode: 200, message: "Success!", data: products });
  } catch (err) {
    return res
      .status(404)
      .json({ statusCode: 404, message: "Unable to Retrieve Products!" });
  }
};

export { getProduct, getAllProduct };

export default uploadProduct;
