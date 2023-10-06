import { coursesFeatured } from '../../../constants';
import { Card } from '../..';
import { useRef } from 'react';
// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

const Courses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 292;

  const handleScrollLeft = () => {
    if (containerRef.current === null) return;

    const newScrollPosition = containerRef.current.scrollLeft - scrollAmount;
    // If the new scroll position would be less than 0, adjust to 0
    const adjustedScrollPosition = Math.max(newScrollPosition, 0);
    containerRef.current.scrollLeft = adjustedScrollPosition;
  };

  const handleScrollRight = () => {
    if (containerRef.current === null) return;

    const newScrollPosition = containerRef.current.scrollLeft + scrollAmount;

    // The maximum scrollable amount
    const maxScrollLeft =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;

    // If the new scroll position would be greater than the maximum, adjust to the maximum
    const adjustedScrollPosition = Math.min(newScrollPosition, maxScrollLeft);
    containerRef.current.scrollLeft = adjustedScrollPosition;
  };

  return (
    <div>
      <div className="p-side">
        <div className="flex flex-col justify-between max-w-screen-wide w-full mx-auto mb-4">
          <div className="max-md:hidden lg:visible min-[1620px]:hidden flex gap-6">
            <button onClick={handleScrollLeft}>
              <ArrowLongLeftIcon className="h-7 aspect-square p-1 border-2 rounded-full bg-light-gray bg-opacity-10 border-light-gray border-opacity-10 transition-all duration-200 text-light-gray hover:border-light-gray hover:text-white" />
            </button>
            <button onClick={handleScrollRight}>
              <ArrowLongRightIcon className="h-7 aspect-square p-1 border-2 rounded-full bg-light-gray bg-opacity-10 border-light-gray border-opacity-10 transition-all duration-200 text-light-gray hover:border-light-gray hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* //? Courses */}
      <div className="relative">
        <div
          ref={containerRef}
          className="no-scrollbar h-[400px] overflow-x-hidden min-[1620px]:max-w-screen-wide min-[1620px]:mx-auto max-[1620px]:overflow-x-scroll"
        >
          <div className="flex gap-[21px] max-[1620px]:p-side ">
            {coursesFeatured.courses.map((course) => (
              <Card
                key={course.label}
                label={course.label}
                slogan={course.slogan}
                duration={course.duration}
                imageSrc={course.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
