import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

const StreamLayout = () => {
  return (
    <div className="relative streamLayout w-screen">
      {/* test */}
      <Outlet />
      <Sidebar />
    </div>
  );
};
export default StreamLayout;
