import { Router } from 'express';
import {
  createChapter,
  updateChapter,
  getAllChapters,
  deleteChapter,
} from '../controllers/chapterController.js';
import { validateChapterInput } from '../middlewares/validationMiddleware.js';
import {
  isAdminMiddleware,
  isDemoAccount,
} from '../middlewares/isAdminMiddleware.js';

const router = Router();

router
  .route('/:courseId')
  .post(validateChapterInput, isAdminMiddleware, isDemoAccount, createChapter)
  .get(getAllChapters);

router
  .route('/:courseId/:chapterId')
  .patch(validateChapterInput, isAdminMiddleware, isDemoAccount, updateChapter)
  .delete(isAdminMiddleware, isDemoAccount, deleteChapter);

export default router;
