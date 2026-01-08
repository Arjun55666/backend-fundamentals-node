import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const authMiddleware = (req, res, next) => {
  // 1️⃣ Read Authorization header
  const authHeader = req.headers.authorization;

  // Example format:
  // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  // 2️⃣ Extract token
  const token = authHeader.split(" ")[1];

  try {
    // 3️⃣ Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // 4️⃣ Attach user info to request
    req.user = decoded;

    // Allow request to continue
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
