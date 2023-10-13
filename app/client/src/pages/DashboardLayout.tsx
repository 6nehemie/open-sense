import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import DashboardNavbar from '../components/navbar/DashboardNavbar';
import { createContext } from 'react';
import { Course } from '../types/courseType';

export const DashboardContext = createContext({
  user: { name: '', email: '', avatar: '', role: '' },
  courses: [] as Course[],
});
interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

const DashboardLayout = () => {
  const { data: user, courses } = useLoaderData() as {
    data: User;
    courses: Course[];
  };
  console.log(courses);

  const pathname = useLocation();
  const dynamicBackground = pathname.pathname === '/browse/settings';

  return (
    <DashboardContext.Provider value={{ user, courses }}>
      <div
        className={`relative min-h-screen flex flex-col bg-dark-gray bg-opacity-70
      ${dynamicBackground ? 'max-sm:bg-white max-sm:text-dark-gray' : ''}
    `}
      >
        <DashboardNavbar />

        <div className="relative flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
