import { Outlet, useLoaderData } from 'react-router-dom';
import { Sidebar } from '../components';
import { createContext } from 'react';
import { CourseContextType } from '../types/courseContextType';

export const CourseContext = createContext<CourseContextType | null>(null);

const StreamLayout = () => {
  const course = useLoaderData() as CourseContextType;

  return (
    <CourseContext.Provider value={course}>
      <div className="relative streamLayout w-screen">
        {/* test */}
        <Outlet />
        <Sidebar />
      </div>
    </CourseContext.Provider>
  );
};
export default StreamLayout;
