import { Router } from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middlewares/validationMiddleware.js';

const router = Router();

router.route('/sign-up').post(validateRegisterInput, registerUser);
router.route('/sign-in').post(validateLoginInput, loginUser);
router.route('/log-out').get(logoutUser);

export default router;
