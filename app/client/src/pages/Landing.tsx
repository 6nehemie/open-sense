import { Navbar, Hero } from '../components';

const Landing = () => {
  return (
    <div className="w-full">
      <header className="flex flex-col gap-60 w-full mt-14 max-lg:mt-10 max-sm:mt-8 p-side font-exo">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
};
export default Landing;
