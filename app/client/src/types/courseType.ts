export interface Course {
  _id: string;
  title: string;
  slogan: string;
  duration?: string;
  description?: string;
  thumbnail: string;
  createdAt: string | Date;
}
