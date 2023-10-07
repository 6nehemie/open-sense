import { Outlet, useLocation } from 'react-router-dom';
import DashboardNavbar from '../components/navbar/DashboardNavbar';

const DashboardLayout = () => {
  const pathname = useLocation();
  const dynamicBackground = pathname.pathname === '/browse/settings';
  console.log(dynamicBackground);

  return (
    // <div className="relative min-h-screen grid dashboard-grid  bg-dark-gray bg-opacity-70">
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
  );
};
export default DashboardLayout;
