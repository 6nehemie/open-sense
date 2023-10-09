import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../utils/passwordUtils.js';
import { createToken } from '../utils/tokenUtils.js';

export const registerUser = async (req, res) => {
  // Making sure to get the right input from the user
  const { name, email, password } = req.body;

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: 'user',
  });

  res
    .status(StatusCodes.CREATED)
    .json({ user, message: 'User created successfully' });
};

export const loginUser = async (req, res) => {
  const token = createToken(req.user);

  return res
    .cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    })
    .status(StatusCodes.OK)
    .json({ message: 'User logged in successfully' });
};

export const logoutUser = async (req, res) => {
  return res
    .clearCookie('jwt')
    .status(StatusCodes.OK)
    .json({ message: 'User logged out successfully' });
};
