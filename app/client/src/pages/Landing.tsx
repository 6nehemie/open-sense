import {
  Navbar,
  Hero,
  Featured,
  Upcoming,
  Prices,
  Reviews,
  Footer,
} from '../components';

const Landing = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-layout">
        <header className="flex flex-col gap-layout w-full mt-14 max-lg:mt-10 max-sm:mt-8 p-side font-exo">
          <Navbar />
          <Hero />
        </header>

        <Featured />
        <Upcoming />
        <div className="p-side">
          <Prices />
        </div>
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
