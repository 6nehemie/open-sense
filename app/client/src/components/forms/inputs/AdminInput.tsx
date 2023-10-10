interface AdminInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdminInput: React.FC<AdminInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`bg-inherit border border-neutral-800 rounded-md p-2 outline-none font-light`}
      />
    </div>
  );
};
export default AdminInput;
