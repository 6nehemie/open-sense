import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import DashboardNavbar from '../components/navbar/DashboardNavbar';
import { createContext } from 'react';

export const DashboardContext = createContext({
  name: '',
  email: '',
  avatar: '',
});
interface User {
  name: string;
  email: string;
  avatar: string;
}

const DashboardLayout = () => {
  const user = useLoaderData() as User;
  console.log(user);

  const pathname = useLocation();
  const dynamicBackground = pathname.pathname === '/browse/settings';

  return (
    <DashboardContext.Provider value={user}>
      <div
        className={`relative min-h-screen flex bg-dark-gray bg-opacity-70
      ${dynamicBackground ? 'max-sm:bg-white max-sm:text-dark-gray' : ''}
    `}
      >
        <DashboardNavbar />

        <div className="relative flex flex-col items-center justify-center row-start-2">
          <Outlet />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
