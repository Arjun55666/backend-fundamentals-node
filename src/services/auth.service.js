import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const loginService = (username, password) => {
  if (username !== "admin" || password !== "admin") {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

