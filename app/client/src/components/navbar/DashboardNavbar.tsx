import { Link } from 'react-router-dom';
import { Logo } from '..';
import { user } from '../../constants';
import { Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';

const DashboardNavbar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full p-side">
      <nav
        className={`relative flex justify-between items-center max-w-screen-wide mx-auto
	pt-14 max-lg:pt-10 max-sm:pt-8 font-exo
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
        <div className="absolute top-32 z-[1000] right-0 bg-light-gray bg-opacity-10 border-2 border-light-gray border-opacity-10 rounded-lg w-full max-w-[220px] ">
          <Link
            to={'settings'}
            className="text-md font-light flex items-center gap-2 py-2 px-4 w-full h-full hover:bg-dark-gray bg-opacity-60 rounded-lg transition-colors duration-200"
          >
            <Cog6ToothIcon className="h-6" /> <span>Settings</span>
          </Link>
          <Link
            to={'/login'}
            className="text-md font-light flex items-center gap-2 py-2 px-4 w-full h-full hover:bg-dark-gray bg-opacity-60 rounded-lg transition-colors duration-200"
          >
            <Cog6ToothIcon className="h-6" /> <span>Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNavbar;
