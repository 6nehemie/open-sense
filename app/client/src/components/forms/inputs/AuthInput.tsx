interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: boolean;
  name: string;
  required?: boolean;
}

const AuthInput: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  name,
  required,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-2 border-light-gray rounded-lg py-3 px-2 outline-none"
      />
    </div>
  );
};
export default AuthInput;
