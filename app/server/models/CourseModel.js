import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: String,
  slogan: String,
  description: String,
  duration: String,
  thumbnail: String,
  thumbnailPublicId: String,
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Course', CourseSchema);
