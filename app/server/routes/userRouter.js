import { Router } from 'express';
import {
  updateUser,
  getCurrentUser,
  getAllUsers,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
import { isAdminMiddleware } from '../middlewares/isAdminMiddleware.js';

const router = Router();

router.route('/current-user').get(getCurrentUser);
router
  .route('/update-user')
  .patch(validateUpdateUserInput, upload.single('avatar'), updateUser);
router.route('/').get(isAdminMiddleware, getAllUsers);

export default router;
