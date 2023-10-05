import { Navbar, Hero, Featured } from '../components';

const Landing = () => {
  return (
    <div className="w-full flex flex-col gap-layout">
      <header className="flex flex-col gap-layout w-full mt-14 max-lg:mt-10 max-sm:mt-8 p-side font-exo">
        <Navbar />
        <Hero />
      </header>

      <div className="">
        <Featured />
      </div>
      <h1>test</h1>
    </div>
  );
};

export default Landing;
