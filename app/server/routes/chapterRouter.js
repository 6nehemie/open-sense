import { Router } from 'express';
import {
  createChapter,
  updateChapter,
  getAllChapters,
  deleteChapter,
} from '../controllers/chapterController.js';
import { validateChapterInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router
  .route('/:courseId')
  .post(validateChapterInput, createChapter)
  .get(getAllChapters);

router
  .route('/:courseId/:chapterId')
  .patch(validateChapterInput, updateChapter)
  .delete(deleteChapter);

export default router;
