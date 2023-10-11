import Lesson from '../models/LessonsModel.js';
import Chapter from '../models/ChapterModel.js';
import { StatusCodes } from 'http-status-codes';

export const createLesson = async (req, res, next) => {
  const { title, description, video } = req.body;

  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    console.log('Chapter', chapter);

    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }

    const lesson = await Lesson.create({
      title,
      description,
      chapter: req.params.chapterId,
    });

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
