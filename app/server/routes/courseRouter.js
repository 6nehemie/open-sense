import { Router } from 'express';
import { addCourse } from '../controllers/courseController.js';
import { isAdminMiddleware } from '../middlewares/isAdminMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = Router();

router
  .route('/add-course')
  .post(isAdminMiddleware, upload.single('thumbnail'), addCourse);

export default router;
