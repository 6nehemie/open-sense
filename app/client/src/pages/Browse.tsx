import { Courses } from '../components';
import Resume from '../components/sections/courses/Resume';

const Browse = () => {
  return (
    <div className="relative min-h-screen grid login-grid">
      <div className="relative flex flex-col items-center justify-center row-start-2">
        <div className="text-center p-side">
          <h1 className="heading-2 mb-0">CHOOSE YOUR PATH.</h1>
          <p className=" font-exo text-light-gray font-light mb-10 hide-on-height">
            Missed starting yesterday? Start now. Each lesson brings you closer
            to mastery. Dive in today and unlock your potential.
          </p>
        </div>
        <Courses />
      </div>

      <Resume />
    </div>
  );
};
export default Browse;
