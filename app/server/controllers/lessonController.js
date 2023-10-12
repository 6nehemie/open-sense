import Lesson from '../models/LessonsModel.js';
import Chapter from '../models/ChapterModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import * as fs from 'fs/promises';
import { resolveMx } from 'dns';

export const createLesson = async (req, res, next) => {
  const { title, description } = req.body;
  const file = req.file;

  if (!title) {
    return res
      .status(400)
      .json({ message: 'Title and description are required' });
  }

  try {
    const chapter = await Chapter.findById(req.params.chapterId);

    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }

    if (!file) return res.status(400).json({ message: 'Video is required' });

    const response = await cloudinary.v2.uploader.upload_large(file.path, {
      resource_type: 'video',
    });
    console.log('IT PASSES THIS');
    await fs.unlink(file.path);

    // console.log(response);

    const newLesson = {
      title,
      description,
      chapter: req.params.chapterId,
      video: response.secure_url,
      videoPublicId: response.public_id,
    };

    console.log(newLesson);

    const lesson = await Lesson.create(newLesson);

    res.status(StatusCodes.CREATED).json({ lesson, message: 'Lesson created' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ chapter: req.params.chapterId });

    res.status(StatusCodes.OK).json({ lessons });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const updateLesson = async (req, res) => {
  const { title, description, video } = req.body;

  const newLesson = {
    title,
    description,
  };

  try {
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    await Lesson.findByIdAndUpdate(req.params.lessonId, newLesson);

    res.status(StatusCodes.OK).json({ message: 'Lesson updated' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.lessonId);
    res.status(StatusCodes.OK).json({ message: 'Lesson deleted' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
