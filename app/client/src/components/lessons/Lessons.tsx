import { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { EditLesson } from '..';

type LessonProps = {
  chapterId: string;
};

type LessonType = {
  _id: string;
  title: string;
  chapter: string;
  description: string;
  video: string;
};

const Lessons: React.FC<LessonProps> = ({ chapterId }) => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<LessonType[]>([]); // [] of lesson objects

  useEffect(() => {
    const getLessons = async () => {
      try {
        const { data } = await customFetch.get(`/lessons/${chapterId}`);
        setLessons(data.lessons);
      } catch (error) {
        console.log(error);
      }
    };
    getLessons();
  }, [chapterId]);

  const handleLessonRemoval = async (lessonId: string) => {
    try {
      await customFetch.delete(`/lessons/lesson/${lessonId}`);
      console.log('Lesson deleted');
    } catch (error) {
      return console.log(error);
    }
    navigate('.');
  };

  return (
    // <div className="flex flex-col gap-6 mb-6">
    <div className="grid grid-cols-3 gap-6 mb-6">
      {lessons.map((lesson) => (
        <div
          key={lesson._id}
          className="relative w-full flex flex-col gap-4 bg-neutral-800 bg-opacity-80 rounded-md border-[1px] border-light-gray border-opacity-20 p-5"
        >
          <h3 className="font-light text">
            <span className="text-light-gray">Lesson title:</span>{' '}
            {lesson.title}
          </h3>

          <video
            src={lesson.video}
            width={400}
            className="rounded-sm w-full"
            controls
          />

          <p className="text-sm font-light leading-tight pb-12">
            <span className="text-light-gray"> Description: </span>
            {lesson.description && lesson.description.slice(0, 100) + '...'}
          </p>

          <div className="absolute left-5 bottom-5 flex gap-4">
            <EditLesson
              title={lesson.title}
              description={lesson.description}
              lessonId={lesson._id}
            />

            <button
              onClick={() => handleLessonRemoval(lesson._id)}
              className="flex gap-1 text-red-light hover:text-red-light-dark duration-200 transition-colors"
            >
              <span className="text-sm font-light">Delete</span>
              <TrashIcon className="h-4" strokeWidth={1.2} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Lessons;
