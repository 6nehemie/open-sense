import { StatusCodes } from 'http-status-codes';

export const isAdminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'You are not authorized to access this resource' });
  }
  next();
};
