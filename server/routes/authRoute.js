// Authentication Route: SignIn | SignOut | SignUp
import { Router } from "express";
import { signIn, signUp, signOut } from "../controllers/authControllers.js";

const router = Router();

// Sign Up Route
router.post("/signin", signIn);

// Sign Up Route
router.post("/signup", signUp);

// Sign Up Route
router.get("/signout", signOut);

export default router;
