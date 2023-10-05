import { coursesFeatured } from '../../../constants';
import CourseCards from './CourseCards';

const Featured = () => {
  return (
    <section className="relative w-full">
      <div className="p-side">
        <div className="w-full max-w-screen-wide mx-auto">
          <h2 className="heading-2 text-right">
            {coursesFeatured.titleLanding}
          </h2>
        </div>
      </div>
      <div className="max-[1634px]:">
        <CourseCards />
      </div>
    </section>
  );
};
export default Featured;
