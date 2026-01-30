import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express(); // ✅ create app FIRST

// global middleware
app.use(express.json());

// routes mounting
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
// health check
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

export default app;
