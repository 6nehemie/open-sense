import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/customErrors.js';
import User from '../models/UserModel.js';
import { comparePasswords, hashPassword } from '../utils/passwordUtils.js';

export const updateUser = async (req, res) => {
  const { name, email, password, newPassword, confirmPassword } = req.body;
  const updatedUser = { name, email };

  try {
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

    const user = await User.findByIdAndUpdate(req.user._id, updatedUser, {
      new: true,
    });

    return res.status(200).json({ user, message: 'User updated successfully' });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
