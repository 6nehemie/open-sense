import { Link } from 'react-router-dom';
import { Logo } from '..';
// import { user } from '../../constants';
import { UserIcon } from '@heroicons/react/24/outline';
import { useContext, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import DashboardMenu from './DashboardMenu';
import { DashboardContext } from '../../pages/DashboardLayout';

const DashboardNavbar: React.FC = () => {
  const user = useContext(DashboardContext);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setOpenMenu(false));

  return (
    <div className="fixed top-0 w-full p-side pb-6 z-50">
      <nav
        className={`relative flex justify-between items-center max-w-screen-wide mx-auto
	pt-14 max-lg:pt-10 max-sm:pt-8 font-exo z-50
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
          menuRef={menuRef}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </nav>
    </div>
  );
};
export default DashboardNavbar;
