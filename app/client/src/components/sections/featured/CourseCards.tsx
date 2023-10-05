import { coursesFeatured } from '../../../constants';
import { Card } from '../..';

const CourseCards = () => {
  return (
    <div className="relative h-[379px]">
      <div className="absolute flex gap-6">
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
