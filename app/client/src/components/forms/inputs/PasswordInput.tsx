import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  error?: boolean;
  name: string;
  required?: boolean;
}

const PasswordInput: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{label}</label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          required={required}
          className="border-2 border-light-gray rounded-lg py-3 px-2 outline-none w-full"
        />

        <div
          className="absolute top-[14px] right-3 text-light-gray hover:text-dark-gray transition-colors duration-200 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {!showPassword ? (
            <EyeIcon className="h-6" />
          ) : (
            <EyeSlashIcon className="h-6" />
          )}
        </div>
      </div>
    </div>
  );
};
export default PasswordInput;
