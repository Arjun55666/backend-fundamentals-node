import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const loginService = (username, password) => {
  // TEMP user check (later DB)
  if (username !== "admin" || password !== "admin") {
    throw new Error("Invalid credentials");
  }

  // ✅ ADD ROLE HERE
  const payload = {
    username: username,
    role: "admin", // 👈 VERY IMPORTANT
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });

  console.log("JWT issued:", token);

  return token;
}