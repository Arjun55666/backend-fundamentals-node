import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to profile",
    user: req.user
  });
});

export default router;
