import { Router } from 'express';
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  getLesson,
  updateLesson,
} from '../controllers/lessonController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = Router();

router
  .route('/:chapterId')
  .post(upload.single('lesson'), createLesson)
  .get(getAllLessons);
router
  .route('/lesson/:lessonId')
  .get(getLesson)
  .patch(updateLesson)
  .delete(deleteLesson);

export default router;
