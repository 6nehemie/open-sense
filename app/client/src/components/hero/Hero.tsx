import { ActionBtn } from '..';
import { hero } from '../../constants';

const Hero = () => {
  return (
    <section className="w-full max-w-screen-wide mx-auto">
      <div className="flex flex-col gap-2 ">
        <h2 className="font-roboto font-medium text-[64px] max-xl:text-[56px] max-[900px]:text-[48px] max-md:text-[42px]  max-w-[715px] max-[900px]:max-w-[550px] leading-tight">
          LEARN FROM THE <span className="text-red-light">BEST</span>, PLAN{' '}
          <span className="text-red-light">YOUR</span> FUTURE
        </h2>
        <p className="text-xl text-light-gray font-light max-[900px]:text-lg max-md:text-base max-sm:text-sm">
          {hero.subText}
        </p>
        <ActionBtn label="Become a member" href="sign-up" />
      </div>
    </section>
  );
};
export default Hero;
