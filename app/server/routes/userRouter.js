import { Router } from 'express';
import { updateUser, getCurrentUser } from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';

const router = Router();

router.route('/current-user').get(getCurrentUser);
router
  .route('/update-user')
  .patch(validateUpdateUserInput, upload.single('avatar'), updateUser);

export default router;
