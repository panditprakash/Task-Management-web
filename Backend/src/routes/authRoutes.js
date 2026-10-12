// import express from "express";
// import { registerUser, loginUser,forgotPassword,resetPassword } from "../Controllers/authController.js";
// // import { forgotPassword } from "../../../Frontend/src/services/profileService.js";

// const router = express.Router();

// /**
//  * Register Route
//  */
// router.post("/register", registerUser);

// /**
//  * Login Route
//  */
// router.post("/login", loginUser);

// router.post("/forgot-password",forgotPassword);
// router.post("/reset-password/:token",resetPassword);


// export default router;



import express from "express";

import {
  registerUser,
  loginUser
} from "../Controllers/authController.js";

const router = express.Router();

// Existing authentication routes.
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;
