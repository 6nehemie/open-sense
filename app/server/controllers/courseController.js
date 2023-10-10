import Course from '../models/CourseModel.js';
import { StatusCodes } from 'http-status-codes';

export const addCourse = async (req, res) => {
  if (req.file) {
    console.log(req.file);
  }
  try {
    const course = await Course.create(req.body);
    res.status(StatusCodes.CREATED).json({ course, message: 'Course created' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
