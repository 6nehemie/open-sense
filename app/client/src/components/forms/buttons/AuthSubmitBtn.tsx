interface ButtonProps {
  label: string;
}

const AuthSubmitBtn: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-red-light text-white rounded-lg text-xl max-lg:text-lg max-md:text-md py-2.5 hover:bg-red-light-dark transition-colors duration-200"
    >
      {label}
    </button>
  );
};
export default AuthSubmitBtn;
