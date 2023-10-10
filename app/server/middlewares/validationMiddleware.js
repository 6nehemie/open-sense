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
    .notEmpty()
    .withMessage('Email is required')
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
  body('name')
    .optional()
    .custom((name, { req }) => {
      if (!name) throw new BadRequestError('Name is required');
      return true;
    }),
  body('email')
    .optional()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .isEmail()
    .withMessage('Invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email }); // Using findOne instead of find because we only want to find one user
      if (user && req.user._id === user._id)
        throw new BadRequestError('Email already exists');
    }),
]);

// export const validateAddCourseInput = withValidationErrors([
//   body('title').optional().notEmpty().withMessage('Title is required'),
//   body('slogan').optional().notEmpty().withMessage('Slogan is required'),
//   body('description')
//     .optional()
//     .notEmpty()
//     .withMessage('Description is required'),
//   // body('thumbnail').notEmpty().withMessage('Thumbnail is required'),
// ]);
