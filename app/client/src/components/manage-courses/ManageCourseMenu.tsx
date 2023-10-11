import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import { AxiosError } from 'axios';
import { Course } from '../../types/courseType';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';

interface MenuProps {
  course: Course;
}

const ManageCourseMenu: React.FC<MenuProps> = ({ course }) => {
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setMenuIsOpen(false));

  const deleteCourse = async (id: string) => {
    setMenuIsOpen(false);
    try {
      const response = await customFetch.delete(`/courses/${id}`);
      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.message);
        return error?.response?.data?.message || 'Something went wrong';
      }
      return error || 'Something went wrong';
    }

    return navigate('/admin/courses');
  };

  return (
    <div>
      <div
        onClick={() => setMenuIsOpen(true)}
        className="absolute right-4 top-4 cursor-pointer hover:bg-neutral-800 text-light-gray rounded-full p-1 transition-colors duration-200"
      >
        <EllipsisVerticalIcon className="h-5" />
      </div>

      {menuIsOpen && (
        <div
          ref={menuRef}
          className="absolute  flex flex-col right-0 top-2 z-30 bg-neutral-800 bg-opacity-80 backdrop-blur-sm border-[1px] border-light-gray border-opacity-20 w-52 rounded-md overflow-hidden"
        >
          <Link
            to={`/admin/courses/${course._id}/lessons`}
            className="flex gap-3 py-2 px-4 hover:bg-neutral-900 w-full justify-self-start text-left transition-colors duration-200"
          >
            <CloudArrowUpIcon className="h-6 text-sky-500" strokeWidth={1.2} />
            <span>Upload</span>
          </Link>

          <Link
            to={`edit-course/${course._id}`}
            className="flex gap-3 py-2 px-4 hover:bg-neutral-900 w-full justify-self-start text-left transition-colors duration-200"
          >
            <ArrowPathIcon className="h-6 text-green-500" strokeWidth={1.2} />
            <span>Update</span>
          </Link>

          <button
            onClick={() => deleteCourse(course._id)}
            className="flex gap-3 py-2 px-4 hover:bg-neutral-900 w-full justify-self-start text-left transition-colors duration-200"
          >
            <TrashIcon className="h-6 text-red-light" strokeWidth={1.2} />
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default ManageCourseMenu;
