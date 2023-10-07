import { body, param, validationResult } from 'express-validator';
import { comparePasswords } from '../utils/passwordUtils.js';
import User from '../models/UserModel.js';
// import mongoose from 'mongoose';
import { BadRequestError } from '../errors/customErrors.js';

const withValidationErrors = (validatesValue) => {
  return [
    validatesValue,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // If multiple errors
        const errorMessages = errors.array().map((error) => error.msg);
        console.log(errorMessages);

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .isEmail()
    .withMessage('Email is invalid')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email }); // Using findOne instead of find because we only want to find one user
      if (user) throw new BadRequestError('Email already exists');
    }),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('confirmPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords must match'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (!user) throw new BadRequestError('Invalid credentials');

      req.user = user;
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .custom(async (password, { req }) => {
      if (!req.user) return;
      if (!(await comparePasswords(password, req.user.password)))
        throw new BadRequestError('Invalid credentials');
    }),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .isEmail()
    .withMessage('Email is invalid')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email }); // Using findOne instead of find because we only want to find one user
      if (user) throw new BadRequestError('Email already exists');
    }),
  body('password').custom(async (password, { req }) => {
    if (!(await comparePasswords(password, req.user.password)))
      throw new BadRequestError('Invalid Password');
  }),
  body('newPassword').custom((newPassword, { req }) => {
    if (!req.body.password) throw new BadRequestError('Password is required');
    if (password && !password.length !== 8)
      throw new BadRequestError('Password must be at least 8 characters long');
  }),
  body('confirmNewPassword').custom((confirmNewPassword, { req }) => {
    if (!req.body.password) throw new BadRequestError('Password is required');
    if (confirmNewPassword !== req.body.newPassword)
      throw new BadRequestError('Passwords must match');
  }),
]);
