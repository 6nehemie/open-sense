import { Router } from 'express';
import { updateUser, getCurrentUser } from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router.route('/current-user').get(getCurrentUser);
router.route('/update-user').post(validateUpdateUserInput, updateUser);

export default router;
