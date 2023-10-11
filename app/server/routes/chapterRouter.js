import { Router } from 'express';
import {
  createChapter,
  updateChapter,
  getAllChapters,
  deleteChapter,
} from '../controllers/chapterController.js';
import { validateChapterInput } from '../middlewares/validationMiddleware.js';
import { isAdminMiddleware } from '../middlewares/isAdminMiddleware.js';

const router = Router();

router
  .route('/:courseId')
  .post(validateChapterInput, isAdminMiddleware, createChapter)
  .get(getAllChapters);

router
  .route('/:courseId/:chapterId')
  .patch(validateChapterInput, isAdminMiddleware, updateChapter)
  .delete(isAdminMiddleware, deleteChapter);

export default router;
