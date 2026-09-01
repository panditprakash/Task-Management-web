import jwt from "jsonwebtoken";

/**
 * Generate JWT Token
 * This function creates a secure login token.
 */
const generateToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

export default generateToken;