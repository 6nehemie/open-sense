import { Link } from 'react-router-dom';
import { Logo } from '..';
interface Props {
  label: string;
  href: string;
  logoHref: string;
}

const CustomNavbar: React.FC<Props> = ({ label, href, logoHref }) => {
  return (
    <nav
      className="w-full flex justify-between items-center max-w-screen-wide mx-auto
	mt-14 max-lg:mt-10 max-sm:mt-8 font-exo
	"
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
  );
};
export default CustomNavbar;
