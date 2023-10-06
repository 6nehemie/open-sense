interface WrapperProps {
  children: React.ReactNode;
  label: string;
  message: string;
}

const AuthWrapper: React.FC<WrapperProps> = ({ children, label, message }) => {
  return (
    <div className="p-14 max-lg:p-10 max-md:p-8 max-sm:p-6 bg-white font-exo text-dark-gray rounded-xl w-full max-w-[602px]">
      <h2 className="heading-2 font-bold mb-0">{label}</h2>
      <p className="mb-14">{message}</p>
      <div>{children}</div>
    </div>
  );
};
export default AuthWrapper;
