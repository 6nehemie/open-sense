import { Link } from 'react-router-dom';
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

interface DashboardMenuProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({
  openMenu,
  setOpenMenu,
  menuRef,
}) => {
  return (
    <div
      ref={menuRef}
      className={`absolute top-32 max-lg:top-28 max-sm:top-24 z-50 right-0 bg-dark-gray bg-opacity-90 border-2 border-light-gray border-opacity-10 rounded-lg w-full max-w-[220px] backdrop-blur-lg
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
  );
};
export default DashboardMenu;
