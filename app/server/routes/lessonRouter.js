import { Router } from 'express';
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  getLesson,
  updateLesson,
} from '../controllers/lessonController.js';
import upload from '../middlewares/multerMiddleware.js';
import { isDemoAccount } from '../middlewares/isAdminMiddleware.js';

const router = Router();

router
  .route('/:chapterId')
  .post(isDemoAccount, upload.single('lesson'), createLesson)
  .get(getAllLessons);
router
  .route('/lesson/:lessonId')
  .get(getLesson)
  .patch(isDemoAccount, updateLesson)
  .delete(isDemoAccount, deleteLesson);

export default router;
