export const adminMiddleware = (req, res, next) => {
  //debug log
  console.log("User role in adminMiddleware:", req.user)
 
 
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }
  next();
};
