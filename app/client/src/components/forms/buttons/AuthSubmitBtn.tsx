interface ButtonProps {
  label: string;
  disabled?: boolean;
}

const AuthSubmitBtn: React.FC<ButtonProps> = ({ label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`bg-red-light text-white rounded-lg text-xl max-lg:text-lg max-md:text-md py-2.5 hover:bg-red-light-dark transition-colors duration-200
      ${disabled ? 'cursor-not-allowed bg-red-300' : ''}
      `}
    >
      {label}
    </button>
  );
};
export default AuthSubmitBtn;
