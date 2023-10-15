import { Router } from 'express';
import {
  addCourse,
  getAllCourses,
  getCourse,
  editCourse,
  deleteCourse,
  getEntireCourse,
} from '../controllers/courseController.js';
import { isAdminMiddleware } from '../middlewares/isAdminMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = Router();

router.route('/').get(getAllCourses);
router
  .route('/add-course')
  .post(isAdminMiddleware, upload.single('thumbnail'), addCourse);
router
  .route('/:id')
  .get(getCourse)
  .patch(isAdminMiddleware, upload.single('thumbnail'), editCourse)
  .delete(isAdminMiddleware, deleteCourse);

router.route('/course/:courseId').get(getEntireCourse);

export default router;
