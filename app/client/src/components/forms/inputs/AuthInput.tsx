interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
  name: string;
  required?: boolean;
}

const AuthInput: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  name,
  required,
  defaultValue,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className={`border-2 border-light-gray rounded-lg py-3 px-2 outline-none
        ${error ? 'border-red-light' : ''}
        `}
      />
      {error && <span className="text-red-light">{error}</span>}
    </div>
  );
};
export default AuthInput;
