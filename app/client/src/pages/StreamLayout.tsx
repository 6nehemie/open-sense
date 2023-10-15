import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import { Sidebar } from '../components';
import { createContext } from 'react';
import { CourseContextType, CourseType } from '../types/courseContextType';

export const CourseContext = createContext<CourseContextType | null>(null);

const StreamLayout = () => {
  const params = useParams();
  const course = useLoaderData() as CourseType;
  document.title = `${course.title}`;

  const lessonsArr = [];

  for (let i = 0; i < course.chapters.length; i++) {
    for (let j = 0; j < course.chapters[i].lessons.length; j++) {
      lessonsArr.push(course.chapters[i].lessons[j]);
    }
  }

  // Return the previous and next lesson
  const previousLesson =
    lessonsArr[
      lessonsArr.findIndex((lesson) => lesson._id === params.lessonId) - 1
    ];
  const nextLesson =
    lessonsArr[
      lessonsArr.findIndex((lesson) => lesson._id === params.lessonId) + 1
    ];

  return (
    <CourseContext.Provider value={{ course, nextLesson, previousLesson }}>
      <div className="relative streamLayout w-screen">
        {/* test */}
        <Outlet />
        <Sidebar />
      </div>
    </CourseContext.Provider>
  );
};
export default StreamLayout;
