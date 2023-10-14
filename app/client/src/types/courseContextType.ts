export type LessonType = {
  title: string;
  chapter: string;
  description: string;
  video: string;
  _id: string;
};

type ChapterType = {
  _id: string;
  title: string;
  course: string;
  lessons: LessonType[];
};

export type CourseContextType = {
  _id: string;
  title: string;
  chapters: ChapterType[];
  createdAt: string;
  duration: string;
  slogan: string;
  thumbnail: string;
};
