import { Link } from 'react-router-dom';

interface ActionBtnProps {
  label: string;
  href: string;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ label, href }) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-6 px-8 py-4 rounded-full border-2 w-max mt-4  hover:bg-light-gray hover:bg-opacity-10 hover:border-light-gray hover:border-opacity-10 transition-all duration-200"
    >
      <p className="font-light">{label}</p>
      <div className="aspect-square rounded-full h-3 bg-white"></div>
    </Link>
  );
};
export default ActionBtn;
