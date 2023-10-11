import Course from '../models/CourseModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import * as fs from 'fs/promises';

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().select('-__v -thumbnailPublicId');
    res.status(StatusCodes.OK).json({ courses });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).select(
      '-__v -thumbnailPublicId'
    );
    res.status(StatusCodes.OK).json({ course });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const addCourse = async (req, res) => {
  const { title, slogan, description, duration } = req.body;

  // if (!title || !slogan || !duration || !req.file)
  //   return res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ message: 'All fields noted "(required)*" must not be empty.' });

  const response = await cloudinary.v2.uploader.upload(req.file.path);
  await fs.unlink(req.file.path);

  const course = {
    title,
    slogan,
    description,
    duration,
    thumbnail: response.secure_url,
    thumbnailPublicId: response.public_id,
  };

  try {
    await Course.create(course);

    res.status(StatusCodes.CREATED).json({ message: 'Course created' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const editCourse = async (req, res) => {
  const { title, slogan, description, duration } = req.body;
  console.log(req.body);

  if (!title)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Title is required' });
  if (!slogan)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Slogan is required' });
  if (!duration)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Duration is required' });

  // if (!title || !slogan || !duration)
  //   return res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ message: 'All fields noted "(required)*" must not be empty.' });

  const course = {
    title,
    slogan,
    description,
    duration,
  };

  console.log(req.file);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    course.thumbnail = response.secure_url;
    course.thumbnailPublicId = response.public_id;
  }

  try {
    const responseCourse = await Course.findByIdAndUpdate(
      req.params.id,
      course
    );

    if (req.file && responseCourse.thumbnailPublicId) {
      // Delete the old image from cloudinary
      await cloudinary.v2.uploader.destroy(responseCourse.thumbnailPublicId);
    }

    res.status(StatusCodes.OK).json({ message: 'Course updated' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const responseCourse = await Course.findByIdAndDelete(req.params.id);

    if (responseCourse.thumbnailPublicId) {
      // Delete the old image from cloudinary
      await cloudinary.v2.uploader.destroy(responseCourse.thumbnailPublicId);
    }

    res.status(StatusCodes.OK).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
