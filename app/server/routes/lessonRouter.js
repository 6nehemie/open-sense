import { Router } from 'express';
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  updateLesson,
} from '../controllers/lessonController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = Router();

router
  .route('/:chapterId')
  .post(upload.single('lesson'), createLesson)
  .get(getAllLessons);
router.route('/:lessonId').patch(updateLesson).delete(deleteLesson);

export default router;
