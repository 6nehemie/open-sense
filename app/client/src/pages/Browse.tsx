import { useContext } from 'react';
import { DashboardCourses } from '../components';
// import Resume from '../components/sections/courses/Resume';
import { DashboardContext } from './DashboardLayout';

const Browse = () => {
  const { courses } = useContext(DashboardContext);
  // console.log(courses);

  return (
    <div className="relative mt-20">
      <div className="relative flex flex-col items-center justify-center row-start-2">
        <div className="text-center p-side">
          <h1 className="heading-2 mb-0">CHOOSE YOUR PATH.</h1>
          <p className=" font-exo text-light-gray font-light mb-10 hide-on-height">
            Missed starting yesterday? Start now. Each lesson brings you closer
            to mastery. Dive in today and unlock your potential.
          </p>
        </div>
        <DashboardCourses courses={courses} />
      </div>

      {/* <Resume /> */}
    </div>
  );
};
export default Browse;
