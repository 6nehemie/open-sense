interface ChapterInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  error?: string | null;
}

const ChapterInput: React.FC<ChapterInputProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  required,
  onChange,
  defaultValue,
  error,
  ref,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className={`bg-inherit border border-neutral-800 rounded-md p-2 outline-none font-light
        ${error ? 'border-red-light' : ''}
        `}
      />
    </div>
  );
};
export default ChapterInput;
