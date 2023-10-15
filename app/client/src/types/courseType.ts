import { Chapter } from './chapterType';

export interface Course {
  _id: string;
  title: string;
  slogan: string;
  duration?: string;
  description?: string;
  thumbnail: string;
  createdAt: string | Date;
  chapters?: Chapter[];
}
// .chapters[0].lessons[0]._id
