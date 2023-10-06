import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/navbar/DashboardNavbar';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen grid login-grid bg-dark-gray bg-opacity-70">
      <DashboardNavbar />

      <div className=" flex items-center justify-center row-start-2">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
