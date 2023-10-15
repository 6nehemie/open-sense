import { useParams } from 'react-router-dom';
import Video from '../components/sections/video/Video';
import { useEffect, useState } from 'react';
import { LessonType } from '../types/courseContextType';
import customFetch from '../utils/customFetch';
import { AxiosError } from 'axios';

const Stream = () => {
  const { lessonId } = useParams();
  const [currentLesson, setCurrentLesson] = useState({} as LessonType);
  const [description, setDescription] = useState<string[]>([]);

  document.title = `${currentLesson.title}`;

  const getLesson = async (lessonId: string) => {
    try {
      const {
        data: { lesson },
      } = await customFetch.get(`/lessons/lesson/${lessonId}`);

      setCurrentLesson(lesson);
      setDescription(lesson.description.split('\n'));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.message);
        return error?.response?.data?.message || 'Something went wrong';
      }
      return error || 'Something went wrong';
    }
  };

  useEffect(() => {
    if (lessonId) {
      // get lesson
      getLesson(lessonId);
    }
  }, [lessonId]);

  return (
    <div className="w-full pb-12">
      <Video videoUrl={currentLesson.video} />
      <div className="max-w-screen-wide mx-auto p-side">
        <div className="">
          <h1 className="heading-2 font-exo">{currentLesson.title}</h1>
          <div className="flex flex-col gap-4 font-exo">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stream;
