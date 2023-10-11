import { mongoose } from 'mongoose';

const ChapterSchema = new mongoose.Schema({
  title: String,
  chapterNumber: Number,
  description: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
});

export default mongoose.model('Chapter', ChapterSchema);
