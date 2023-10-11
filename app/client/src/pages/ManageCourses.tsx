import {
  CloudArrowUpIcon,
  //   ArrowLongLeftIcon,
  //   ArrowLongRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
// import { coursesFeatured } from '../constants';
import { Link, useLoaderData } from 'react-router-dom';
import { ManageCourseMenu } from '../components';
import dayjs from 'dayjs';

interface Course {
  _id: string;
  title: string;
  slogan: string;
  thumbnail: string;
  createdAt: string | Date;
}

const ManageCourses = () => {
  const { courses } = useLoaderData() as { courses: Course[] };

  return (
    <>
      <div className="p-side">
        <div className="flex justify-between items-center mb-8 w-full max-w-screen-wide mx-auto">
          <h2 className="heading-3 mb-0">Manage Courses</h2>

          <Link
            to={'/admin/new-course'}
            className="flex gap-2 items-center cursor-pointer hover:text-neutral-400 transition-colors duration-200"
          >
            <PlusIcon className="h-5" />
            <p className="font-exo font-light ">Add Course</p>
          </Link>
        </div>
      </div>

      <div className="min-[612px]:p-side mb-16">
        <div className="w-full max-w-screen-wide mx-auto font-exo">
          <div className="border border-neutral-800 min-[612px]:rounded-lg ">
            <div className="w-full">
              <div className="grid grid-cols-4 py-3 px-4 text-sm bg-neutral-800 bg-opacity-50 font-normal text-neutral-300 border-b-[1px] border-neutral-800 max-[1471px]:grid-cols-3 max-[900px]:grid-cols-2 max-[612px]:grid-cols-1">
                <h2>Title</h2>
                <h2 className="max-[1471px]:hidden">Slogan</h2>
                <h2 className="max-[612px]:hidden">Date</h2>
                {/* <h2 className="max-[900px]:hidden">Comments</h2> */}
              </div>

              <ul>
                {courses.map((course) => (
                  <li className=" items-center relative grid gap-x-2 grid-cols-4 px-4 py-3 font-light border-b-[1px] border-neutral-800 max-[1471px]:grid-cols-3 max-[900px]:grid-cols-2 max-[612px]:grid-cols-1">
                    <div className=" flex items-center gap-4">
                      <div className="aspect-square rounded-md bg-neutral-700 h-8 overflow-hidden">
                        {course.thumbnail && (
                          <img
                            src={course.thumbnail}
                            alt={`${course.title} thumbnail`}
                          />
                        )}
                      </div>
                      <div className="leading-tight">
                        <Link
                          to={`edit-course/${course._id}`}
                          className="hover:underline underline-offset-2"
                        >
                          {course.title}
                        </Link>
                        <p className="text-neutral-400 text-sm min-[1471px]:hidden">
                          {course.slogan.slice(0, 20)}
                          {course.slogan.length > 20 && '...'}
                        </p>
                      </div>
                    </div>

                    <p className="max-[1471px]:hidden">
                      {course.slogan.slice(0, 30)}
                      {course.slogan.length > 30 && '...'}
                    </p>

                    <p className="max-[612px]:hidden">
                      {dayjs(course.createdAt).format('DD/MM/YYYY')}
                    </p>

                    <Link
                      to={`/admin/courses/${course._id}/lessons`}
                      className="max-[900px]:hidden flex gap-3 hover:underline underline-offset-2"
                    >
                      <CloudArrowUpIcon
                        className="h-6 text-light-gray"
                        strokeWidth={1.2}
                      />
                      <span>Upload</span>
                    </Link>

                    <ManageCourseMenu course={course} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="p-side text-sm">
        <div className="w-full max-w-screen-wide mx-auto flex justify-between items-center text-neutral-300">
          <button className="flex self-start items-center gap-4 hover:text-white transition-colors duration-200">
            <ArrowLongLeftIcon className="h-5 inline-block max-[602px]:hidden" />
            <p>Previous</p>
          </button>

          <div className="grid grid-cols-5 w-52">
            <div className="border-b-[1.5px] pb-2 text-white">
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                1
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                2
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                3
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                4
              </p>
            </div>
            <div>
              <p className="text-center cursor-pointer hover:text-white transition-colors duration-200">
                5
              </p>
            </div>
          </div>

          <button className="flex self-start items-center gap-4 hover:text-white transition-colors duration-200">
            <p>Next</p>
            <ArrowLongRightIcon className="h-5 inline-block max-[602px]:hidden" />
          </button>
        </div>
      </div> */}
    </>
  );
};
export default ManageCourses;
