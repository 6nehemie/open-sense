import Course from '../models/CourseModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import * as fs from 'fs/promises';

export const addCourse = async (req, res) => {
  const { title, slogan, description, duration } = req.body;

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
  if (!req.file)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Thumbnail is required' });

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
    const responseCourse = await Course.create(course);

    if (responseCourse.thumbnailPublicId) {
      // Delete the old image from cloudinary
      await cloudinary.v2.uploader.destroy(responseCourse.thumbnailPublicId);
    }

    res.status(StatusCodes.CREATED).json({ course, message: 'Course created' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
