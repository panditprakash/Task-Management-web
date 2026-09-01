import jwt from "jsonwebtoken";
import User from "../Models/User.js";

/**
 * Protect Route Middleware
 * Allows access only to logged-in users.
 */
const protect = async (request, response, next) => {
  try {
    const authorizationHeader = request.headers.authorization;

    // Check token existence
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return response.status(401).json({
        success: false,
        message: "Access denied. Token missing.",
      });
    }
    // Remove "Bearer "
    const token = authorizationHeader.split(" ")[1];

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decodedToken.id).select("-password");

    if (!user) {
      return response.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    request.user = user;

    next();
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export default protect;
