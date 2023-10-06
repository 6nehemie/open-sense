import { Link } from 'react-router-dom';
import { Logo } from '..';
interface Props {
  label: string;
  href: string;
  logoHref: string;
  light?: boolean;
}

const CustomNavbar: React.FC<Props> = ({ label, href, logoHref, light }) => {
  return (
    <div className="absolute top-0 w-full p-side">
      <nav
        className={`flex justify-between items-center max-w-screen-wide mx-auto
	pt-14 max-lg:pt-10 max-sm:pt-8 font-exo
    ${light ? 'text-white max-md:text-dark-gray' : ''}
  `}
      >
        <Link to={logoHref}>
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to={href}
            className="transition-colors duration-200 hover:text-neutral-300"
          >
            {label}
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default CustomNavbar;
