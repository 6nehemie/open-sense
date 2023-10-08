import { Router } from 'express';
import { updateUser } from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router.route('/update-user').post(validateUpdateUserInput, updateUser);

export default router;
