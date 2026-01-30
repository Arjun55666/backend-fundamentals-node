import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";



const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,     // authentication
  adminMiddleware,    // authorization
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

export default router;
