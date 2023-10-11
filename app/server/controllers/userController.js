import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/customErrors.js';
import User from '../models/UserModel.js';
import { comparePasswords, hashPassword } from '../utils/passwordUtils.js';
import cloudinary from 'cloudinary';
import * as fs from 'fs/promises';
import { log } from 'console';

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');

    return res.status(200).json(user);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const updateUser = async (req, res) => {
  const { name, email, password, newPassword, confirmPassword } = req.body;
  const updatedUser = { name: name || req.user.name, email };

  try {
    // Upload to cloudinary
    if (req.file) {
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      // remove the file from the server
      await fs.unlink(req.file.path);
      updatedUser.avatar = response.secure_url;
      updatedUser.avatarId = response.public_id;
    }

    if (password) {
      const validPassword = await comparePasswords(password, req.user.password);

      if (!validPassword)
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'Invalid password' });

      if (!newPassword || !confirmPassword)
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'Please enter a new password and confirm it' });

      if (newPassword !== confirmPassword)
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'Password must match.' });

      const hashedPassword = await hashPassword(newPassword);

      updatedUser.password = hashedPassword;
    }

    const oldUser = await User.findByIdAndUpdate(req.user._id, updatedUser);

    if (req.file && oldUser.avatarId) {
      await cloudinary.v2.uploader.destroy(oldUser.avatarId);
    }

    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');

    return res.status(200).json(users);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
