import Lesson from '../models/LessonsModel.js';
import Chapter from '../models/ChapterModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import * as fs from 'fs/promises';

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

    // Upload large do not return a promise by default
    const videoResponse = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_large(
        file.path,
        {
          resource_type: 'video',
        },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
    await fs.unlink(file.path);

    const newLesson = {
      title,
      description,
      chapter: req.params.chapterId,
      video: videoResponse.secure_url,
      videoPublicId: videoResponse.public_id,
    };

    const lesson = await Lesson.create(newLesson);

    // Add the new lesson to the lessons array of the parent chapter
    chapter.lessons.push(lesson._id);
    await chapter.save();

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
  const { title, description } = req.body;

  try {
    const lesson = await Lesson.findById(req.params.lessonId);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    const newLesson = {
      title,
      description,
      // chapter: req.params.chapterId,
    };

    await Lesson.findByIdAndUpdate(req.params.lessonId, newLesson);

    res.status(StatusCodes.OK).json({ message: 'Lesson updated' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.lessonId);
    await cloudinary.v2.uploader.destroy(lesson.videoPublicId);

    res.status(StatusCodes.OK).json({ message: 'Lesson deleted' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
