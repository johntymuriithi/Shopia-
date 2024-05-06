/**
 * Back End - GreenShopper Project
 * developed by: Cre8Steve Dev - Omoregie Stephen
 * Stack: MongoDB, Express/NodeJS
 *
 */

//import dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import getProductsRouter from "./routes/getProducts.js";
import cors from "cors";

// Load env into the config
dotenv.config();

//Initialize Server
const app = express();

// Set Up MiddleWare
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// To allow processing form based requests
app.use(express.urlencoded({ extended: true }));

// Connect to Database and Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    // Connect to database and then on success, start to listen
    console.log("(=============================");
    console.log("Connected to DataBase:", res.connection.name);

    // Listen on port
    app.listen(process.env.PORT || 3000, () =>
      console.log("Connected to Server")
    );
  })
  .catch((err) => {
    console.log("==============================================");
    console.log("There was an Error");
    console.log("==============================================");
    console.log(err.message);
  });

// Set up Project for Deployment
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // Send your html which is the root for your react
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("API is running"));
}
// Define Routers
// @Auth: User Sign In / Profile
// @Products: To Serve the Shop Component
// @Product/:param (product ID)

app.use("/api/auth", authRouter);
app.use("/api/admin", productRouter);

// Retrieve Products
app.use("/api/products", getProductsRouter);
//
// Handle Error Custom Middle Ware
// Custom Middleware that sends an error I think
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
