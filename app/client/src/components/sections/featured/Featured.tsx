import { coursesFeatured } from '../../../constants';
import CourseCards from './CourseCards';

const Featured = () => {
  return (
    <section className="relative w-full max-w-screen-wide mx-auto">
      <h2 className="heading-2 text-right">{coursesFeatured.titleLanding}</h2>
      <CourseCards />
    </section>
  );
};
export default Featured;
