// Product Routes - API
import express from "express";
import verifyUser from "../middleware/verifyUser.js";
import uploadProduct from "../controllers/productControllers.js";

const router = express.Router();

router.post("/upload-product", verifyUser, uploadProduct);

export default router;
