import { Router } from 'express';
import {
  addCourse,
  getAllCourses,
  getCourse,
  editCourse,
} from '../controllers/courseController.js';
import { isAdminMiddleware } from '../middlewares/isAdminMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = Router();

const checkBody = (req, res, next) => {
  console.log(req.body);
  next();
};

router.route('/').get(getAllCourses);
router
  .route('/add-course')
  .post(isAdminMiddleware, upload.single('thumbnail'), addCourse);
router
  .route('/:id')
  .get(getCourse)
  .patch(isAdminMiddleware, checkBody, editCourse);

export default router;
