import { Link } from 'react-router-dom';
import { coursesFeatured } from '../../../constants';

const latest = coursesFeatured.courses[coursesFeatured.courses.length - 1];

const Resume = () => {
  return (
    <div className="fixed bottom-14 max-lg:bottom-10 max-sm:bottom-8 font-exo z-50 p-side w-full ">
      <div className=" max-w-screen-wide grid mx-auto z-40">
        <div>
          {/* <h5>{latest.label}</h5> */}
          <p className=" mb-2">01. Introduction</p>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-12 h-12 rounded-md">
              <img
                src={latest.imageSrc}
                height={80}
                width={80}
                alt={`${latest.label} course.`}
              />
            </div>
            <Link
              to={'.'}
              className="text-dark-gray bg-white rounded-md py-3 px-8 hover:bg-neutral-300 transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
