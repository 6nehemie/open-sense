import { StatusCodes } from 'http-status-codes';

export const isAdminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'You are not authorized to access this resource' });
  }
  next();
};

export const isDemoAccount = (req, res, next) => {
  if (req.user.email === 'test@test.com')
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'This is a demo account. You cannot perform this action',
    });

  next();
};
