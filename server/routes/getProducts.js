//  Instantiate router
import express from "express";
import {
  getProduct,
  getAllProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/single/:id", getProduct);
router.post("/allproducts", getAllProduct);

export default router;
