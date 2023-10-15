import { LessonType } from './courseContextType';

export interface Chapter {
  _id: string;
  title: string;
  course: string;
  lessons: LessonType[];
}
