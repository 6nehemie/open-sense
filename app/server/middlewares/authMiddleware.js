import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // to get access to the cookie header

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'You must be logged in to access this resource' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'You must be logged into access this resource' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'You must be logged into access this resource' });
  }
};

export default authMiddleware;
