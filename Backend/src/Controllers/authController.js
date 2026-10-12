// import bcrypt from "bcryptjs";
// import User from "../Models/User.js";

// import generateToken from "../utils/generateToken.js";

// //  Register New User
// export const registerUser = async (request, response) => {
//   try {
//     const { name, email, password } = request.body;

//     // Check for empty fields
//     if (!name || !email || !password) {
//       return response.status(400).json({
//         success: false,
//         message: "All fields are required.",
//       });
//     }

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return response.status(409).json({
//         success: false,
//         message: "Email already registered.",
//       });
//     }

//     // Encrypt password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Generate JWT
//     const token = generateToken(newUser._id);

//     return response.status(201).json({
//       success: true,
//       message: "Account created successfully.",
//       token,
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     return response.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// //  * Login User
// //  * Verifies email and password.
// export const loginUser = async (request, response) => {
//   try {
//     const { email, password } = request.body;

//     // Check missing fields
//     if (!email || !password) {
//       return response.status(400).json({
//         success: false,
//         message: "Email and password are required.",
//       });
//     }

//     // Find user
//     const user = await User.findOne({ email });

//     if (!user) {
//       return response.status(401).json({
//         success: false,
//         message: "Invalid email or password.",
//       });
//     }

//     // Compare passwords
//     const passwordMatched = await bcrypt.compare(password, user.password);

//     if (!passwordMatched) {
//       return response.status(401).json({
//         success: false,
//         message: "Invalid email or password.",
//       });
//     }

//     // Generate token
//     const token = generateToken(user._id);

//     return response.status(200).json({
//       success: true,
//       message: "Login successful.",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     return response.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * Request a password reset link.
//  *
//  * This endpoint:                                                                                                                                                                            
//  * 1. Receives the user's email.
//  * 2. Finds the account.
//  * 3. Generates a secure temporary token.
//  * 4. Stores the hashed token in MongoDB.
//  * 5. Sends a reset link by email.
//  */
// export const forgotPassword = async (req, res) => {
//   try {
//     const email = req.body.email?.trim().toLowerCase();

//     // Validate email.
//     if (!email) {
//       return res.status(400).json({
//         message: "Email address is required.",
//       });
//     }

//     // Find the user by email.
//     const user = await User.findOne({ email });

//     /*
//      * Always return the same response whether
//      * the email exists or not.
//      *
//      * This prevents account enumeration.
//      */
//     if (!user) {
//       return res.status(200).json({
//         message:
//           "If an account exists with this email, a password reset link has been sent.",
//       });
//     }

//     /*
//      * Generate a secure random token.
//      *
//      * This token is sent to the user.
//      */
//     const resetToken = crypto.randomBytes(32).toString("hex");

//     /*
//      * Store only the SHA-256 hash of the token
//      * in the database.
//      */
//     const hashedToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");

//     // Token expires after 15 minutes.
//     const resetTokenExpiry =
//       Date.now() + 15 * 60 * 1000;

//     // Save reset token information.
//     user.passwordResetToken = hashedToken;
//     user.passwordResetExpires = resetTokenExpiry;

//     await user.save();

//     /*
//      * Create the frontend reset URL.
//      *
//      * Example:
//      * http://localhost:5173/reset-password/abc123
//      */
//     const resetUrl =
//       `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

//     // Send reset email.
//     await sendPasswordResetEmail(
//       user.email,
//       resetUrl
//     );

//     return res.status(200).json({
//       message:
//         "If an account exists with this email, a password reset link has been sent.",
//     });
//   } catch (error) {
//     console.error(
//       "Forgot password error:",
//       error
//     );

//     return res.status(500).json({
//       message:
//         "Unable to process password reset request.",
//     });
//   }
// };




import bcrypt from "bcryptjs";

import User from "../Models/User.js";
import generateToken from "../utils/generateToken.js";

// Register a new user.
export const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return response.status(409).json({
        success: false,
        message: "Email already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

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
    console.error("Register error:", error);

    return response.status(500).json({
      success: false,
      message: "Unable to register user.",
    });
  }
};

// Log in an existing user.
export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return response.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const passwordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatched) {
      return response.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

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
    console.error("Login error:", error);

    return response.status(500).json({
      success: false,
      message: "Unable to log in.",
    });
  }
};

