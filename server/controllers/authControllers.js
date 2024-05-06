// Authentication Controllers: SignIn || SignOut || SignUp
import jwt from "jsonwebtoken";
import bycryptjs from "bcryptjs";

// Import Models

import { User, ShoppingCart } from "../models/models.js";

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Generate salt for the hash function
  const salt = bycryptjs.genSaltSync();
  const hashedPassword = bycryptjs.hashSync(password, salt);

  try {
    const newUser = new User({ name, email, password: hashedPassword });

    // save the newUser Object to database
    const response = await newUser.save();

    if (response) {
      // Create a Shopping Cart for the user if successfully created
      const userCart = new ShoppingCart({ userId: response._id });
      await userCart.save();
    }

    res.status(201).json({
      statusCode: 201,
      success: true,
      message: "User Successfully Created!",
    });

    //Catch Block
  } catch (error) {
    //console.log(error.message);
    res.status(400).json({
      statusCode: 400,
      success: false,
      message: "Error Creating New User.",
    });
  }
  // Try to create new account
};

// create Sign In Controller
const signIn = async (req, res, next) => {
  // Destructure email and password
  // try to find user by email
  // Compare provided password with hashed password in db
  //if fail throw an error
  //else: separate the hashed password from the returned object
  // retreive the user's cart Also
  // send back user Object and cart Object
  // sign cookie to the client also
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email }, { password: 0 });

    if (!validUser) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Invalid Login Credentials",
      });
    }

    // Retrieve Shopping Cart
    const cart = await ShoppingCart.findOne({ userId: validUser._id });

    if (!cart) {
      return res.status(500).json({
        statusCode: 500,
        success: false,
        message: "Error Retrieving Your Cart!",
      });
    }

    // Create a jwt token to assign to the cookie
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // upon Successful retrieval of the Cart

    res
      .cookie("vvyyzz", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24 * 30),
      })
      .status(200)
      .json({
        statusCode: 200,
        message: "Sign In Successful",
        user: validUser,
        cart,
      });
  } catch (err) {
    next(err);
  }
};

// Define SighOut Controller
const signOut = async (req, res, next) => {
  return res.clearCookie("vvyyzz").json({
    statusCode: 200,
    success: true,
    message: "Signed Out Successfully!",
  });
};

// export Auth Controllers
export { signUp, signIn, signOut };
