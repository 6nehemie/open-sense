import { coursesFeatured } from '../../../constants';
import { Card } from '../..';

const CourseCards = () => {
  return (
    <div className="relative h-[379px] overflow-x-hidden min-[1620px]:max-w-screen-wide min-[1620px]:mx-auto max-[1620px]:overflow-x-auto">
      <div className="absolute flex gap-[21px] max-[1620px]:p-side">
        {coursesFeatured.courses.map((course) => (
          <Card
            label={course.label}
            slogan={course.slogan}
            duration={course.duration}
            imageSrc={course.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
export default CourseCards;
