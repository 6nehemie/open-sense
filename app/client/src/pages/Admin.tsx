import { Outlet, useLoaderData } from 'react-router-dom';
import AdminNavbar from '../components/navbar/AdminNavbar';

interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

const Admin = () => {
  document.title = `Admin`;
  const user = useLoaderData() as User;

  return (
    <div className="min-h-screen bg-dark-gray bg-opacity-80 pb-12">
      <AdminNavbar user={user} />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
export default Admin;
