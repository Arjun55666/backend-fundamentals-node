import { loginService } from "../services/auth.service.js";

export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  const result = loginService(username, password);
  res.json(result);
};
