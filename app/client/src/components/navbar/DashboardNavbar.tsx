import { Link } from 'react-router-dom';
import { Logo } from '..';
import { user } from '../../constants';
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';

const DashboardNavbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setOpenMenu(false));

  return (
    <div className="fixed top-0 w-full p-side z-50">
      <nav
        className={`relative flex justify-between items-center max-w-screen-wide mx-auto
	pt-14 max-lg:pt-10 max-sm:pt-8 font-exo z-50
  `}
      >
        <Link to={'/browse'}>
          <Logo />
        </Link>
        <div className="whitespace-nowrap flex items-center cursor-pointer">
          <p className="max-sm:hidden whitespace-nowrap mr-6">
            Hi, {user.name}.
          </p>
          <div
            onClick={() => setOpenMenu(!openMenu)}
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
        <div
          ref={menuRef}
          className={`absolute top-32 max-lg:top-28 max-sm:top-24 z-50 right-0 bg-dark-gray bg-opacity-50 border-2 border-light-gray border-opacity-10 rounded-lg w-full max-w-[220px] backdrop-blur-lg
		  ${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} 
		  `}
        >
          <Link
            to={'.'}
            onClick={() => setOpenMenu(false)}
            className="text-md font-light flex items-center gap-3 py-2 px-4 w-full h-full hover:bg-neutral-800 bg-opacity-80 rounded-lg transition-colors duration-200"
          >
            <HomeIcon className="h-6" /> <span>Home</span>
          </Link>
          <Link
            to={'settings'}
            onClick={() => setOpenMenu(false)}
            className="text-md font-light flex items-center gap-3 py-2 px-4 w-full h-full hover:bg-neutral-800 bg-opacity-80 rounded-lg transition-colors duration-200"
          >
            <Cog6ToothIcon className="h-6" /> <span>Settings</span>
          </Link>
          <Link
            to={'/sign-in'}
            onClick={() => setOpenMenu(false)}
            className="text-md font-light flex items-center gap-3 py-2 px-4 w-full h-full hover:bg-neutral-800 bg-opacity-80 rounded-lg transition-colors duration-200 text-red-light"
          >
            <ArrowRightOnRectangleIcon className="h-6" /> <span>Log Out</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNavbar;
