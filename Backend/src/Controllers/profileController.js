import User from "../Models/User.js";
import cloudinary from "../utils/cloudinary.js";
import bcrypt from "bcryptjs";

/**
 * Get logged-in user's profile.
 */
export const getProfile = async (
  request,
  response
) => {
  response.json({
    success: true,
    user: request.user,
  });
};
//update profile
export const updateProfile = async (
  request,
  response
) => {
  try {
    const updatedUser =
      await User.findByIdAndUpdate(
        request.user._id,
        {
          name: request.body.name,
          email: request.body.email,
        },
        {
          new: true,
        }
      ).select("-password");

    response.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// upload avatar
export const uploadAvatar = async (
  request,
  response
) => {
  try {
    if (!request.file) {
      return response.status(400).json({
        success: false,
        message: "Image required.",
      });
    }

    const uploadedImage =
      await cloudinary.uploader.upload(
        `data:${request.file.mimetype};base64,${request.file.buffer.toString("base64")}`,
        {
          folder: "taskflow-avatar",
        }
      );

    const updatedUser =
      await User.findByIdAndUpdate(
        request.user._id,
        {
          avatar:
            uploadedImage.secure_url,
        },
        {
          new: true,
        }
      ).select("-password");

    response.json({
      success: true,
      avatar:
        uploadedImage.secure_url,
      user: updatedUser,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Change Password
 * Verifies the current password before saving the new password.
 */
export const changePassword = async (request, response) => {
  try {
    const { currentPassword, newPassword } = request.body;

    if (!currentPassword || !newPassword) {
      return response.status(400).json({
        success: false,
        message: "All password fields are required.",
      });
    }

    const user = await User.findById(request.user._id);

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return response.status(401).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    response.json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};