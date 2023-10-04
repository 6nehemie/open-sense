import { Link } from 'react-router-dom';
import { navigation } from '../../constants';

interface MenuProps {
  showMenu: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
}

const Menu: React.FC<MenuProps> = ({ showMenu, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className={`flex flex-col absolute top-0 right-0 w-60 bg-cool-gray border-2 border-light-gray border-opacity-10 rounded-lg overflow-hidden  transition-opacity duration-200
	${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}
	`}
    >
      {navigation.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={`px-5 py-3  text-white hover:bg-neutral-800 hover:text-neutral-300 transition-colors duration-200`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
export default Menu;
