import bcrypt from "bcryptjs";
import User from "../Models/User.js";

import generateToken from "../utils/generateToken.js";

//  Register New User
export const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // Check for empty fields
    if (!name || !email || !password) {
      return response.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return response.status(409).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken(newUser._id);

    return response.status(201).json({
      success: true,
      message: "Account created successfully.",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//  * Login User
//  * Verifies email and password.
export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    // Check missing fields
    if (!email || !password) {
      return response.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Compare passwords
    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      return response.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Generate token
    const token = generateToken(user._id);

    return response.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
