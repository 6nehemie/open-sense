import { StatusCodes } from 'http-status-codes';
import Chapter from '../models/ChapterModel.js';
import Course from '../models/CourseModel.js';

// title: String,
// chapterNumber: Number,
// description: String,
// course: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Course',
// },
// lessons: [
//   {
// 	type: mongoose.Schema.Types.ObjectId,
// 	ref: 'Lesson',
//   },
// ],

export const createChapter = async (req, res, next) => {
  const { title, chapterNumber, description } = req.body;

  const course = await Course.findById(req.params.courseId);

  if (!course)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Course not found' });

  const createChapter = {
    title,
    chapterNumber,
    description,
    course: req.params.courseId,
  };

  try {
    const chapter = await Chapter.create(createChapter);
    res
      .status(StatusCodes.CREATED)
      .json({ chapter, message: 'Chapter created' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const getAllChapters = async (req, res, next) => {
  const chapters = await Chapter.find({ course: req.params.courseId });

  try {
    res.status(StatusCodes.OK).json({ chapters, message: 'success' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const updateChapter = async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  const chapter = await Chapter.findById(req.params.chapterId);

  if (!course)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Course not found' });
  if (!chapter)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Chapter not found' });

  try {
    const chapter = await Chapter.findByIdAndUpdate(
      req.params.chapterId,
      req.body,
      { new: true }
    );
    return res
      .status(StatusCodes.OK)
      .json({ chapter, message: 'Chapter updated' });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

export const deleteChapter = async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  const chapter = await Chapter.findById(req.params.chapterId);

  if (!course)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Course not found' });
  if (!chapter)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'Chapter not found' });

  try {
    await Chapter.findByIdAndDelete(req.params.chapterId);
    return res.status(StatusCodes.OK).json({ message: 'Chapter deleted' });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
