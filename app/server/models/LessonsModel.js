import { mongoose } from 'mongoose';

const LessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  video: String,
  videoPublicId: String,
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
  },
});

export default mongoose.model('Lesson', LessonSchema);
