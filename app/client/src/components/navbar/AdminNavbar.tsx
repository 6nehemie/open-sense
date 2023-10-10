import { Link, useLocation } from 'react-router-dom';
import { Logo } from '..';
import { UserIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import DashboardMenu from './DashboardMenu';

interface Props {
  user: { name: string; email: string; role: string; avatar: string };
}

const AdminNavbar: React.FC<Props> = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useClickOutside(menuRef, () => setOpenMenu(false));

  return (
    <div className="sticky top-0 w-full p-side pb-6 z-50 bg-dark-gray bg-opacity-30 backdrop-blur-lg">
      <nav
        className={`relative flex justify-between items-center max-w-screen-wide mx-auto
	pt-14 max-lg:pt-10 max-sm:pt-8 font-exo z-50 mb-6
  `}
      >
        <Link to={'/browse'}>
          <Logo />
        </Link>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="whitespace-nowrap flex items-center cursor-pointer"
        >
          <p className="max-sm:hidden whitespace-nowrap mr-6">
            Hi, {user.name}.
          </p>
          <div
            className={`flex items-center justify-center h-12 w-12 aspect-square rounded-full bg-dark-gray overflow-hidden mr-2
		 ${
       !user.avatar
         ? 'border-2 border-transparent hover:border-light-gray hover:border-opacity-20 transition-colors duration-400'
         : ''
     } 
		  `}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={`Profile image of ${user.name}`}
                width={60}
                height={60}
                className="aspect-square object-cover hover:opacity-60 transition-opacity duration-200"
              />
            ) : (
              <UserIcon className="h-6 aspect-square text-light-gray" />
            )}
          </div>
        </div>

        {/* //? MENU  */}
        <DashboardMenu
          role={user.role}
          menuRef={menuRef}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </nav>
      <div className="max-w-screen-wide w-full mx-auto flex gap-8 mb-10">
        <Link
          to={'.'}
          className={`
		${location.pathname === '/admin' ? 'underline underline-offset-8' : ''}`}
        >
          Users
        </Link>
        <Link
          to={'courses'}
          className={`
				  ${
            location.pathname === '/admin/courses'
              ? 'underline underline-offset-8'
              : ''
          }`}
        >
          Courses
        </Link>
      </div>
    </div>
  );
};
export default AdminNavbar;
