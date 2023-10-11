import { Router } from 'express';
import {
  createLesson,
  deleteLesson,
  getAllLessons,
  updateLesson,
} from '../controllers/lessonController.js';

const router = Router();

router.route('/:chapterId').post(createLesson).get(getAllLessons);
router.route('/:lessonId').patch(updateLesson).delete(deleteLesson);

export default router;
