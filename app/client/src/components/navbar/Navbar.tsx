import { Link } from 'react-router-dom';
import { Logo } from '..';
import { navigation } from '../../constants';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Menu from './Menu';
import { useClickOutside } from '../../hooks';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setShowMenu(false));
  return (
    <nav className="flex justify-between items-center max-w-screen-wide mx-auto">
      <Logo />
      <div className="flex items-center gap-6">
        {navigation.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={` transition-colors duration-200 max-lg:hidden
			${
        link.label === 'Sign Up'
          ? 'bg-red-light px-7 py-2 rounded-full hover:bg-red-light-dark hover:text-white'
          : 'hover:text-neutral-300'
      }
		  `}
          >
            {link.label}
          </Link>
        ))}
        <div className="relative lg:hidden ">
          <div onClick={() => setShowMenu(true)}>
            <Bars3Icon className="h-6 hover:text-neutral-300 transition-colors duration-200 cursor-pointer" />
          </div>
          <Menu showMenu={showMenu} menuRef={menuRef} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
