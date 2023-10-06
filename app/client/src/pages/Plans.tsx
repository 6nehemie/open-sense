import { CustomNavbar, Prices } from '../components';

const Plans = () => {
  return (
    <div className="relative min-h-screen p-side grid login-grid">
      <CustomNavbar label="Log In" href="/sign-in" logoHref="/" light={false} />

      <div className="w-full flex items-center justify-center row-start-2">
        <Prices />
      </div>
    </div>
  );
};
export default Plans;
