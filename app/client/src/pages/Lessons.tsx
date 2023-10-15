import { ArrowLeftIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { Link, useLoaderData } from 'react-router-dom';
import { Course } from '../types/courseType';
import { Chapters, CreateChapter } from '../components';
import { Chapter } from '../types/chapterType';

interface LoaderData {
  course: Course;
  chapters: Chapter[];
}

const Lessons = () => {
  document.title = `Manage Lessons`;
  const { course, chapters } = useLoaderData() as LoaderData;

  return (
    <div className="p-side">
      <div className="w-full max-w-screen-wide mx-auto font-exo">
        <Link
          to="/admin/courses"
          className="flex mb-12 items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5" />
          <span>Back</span>
        </Link>

        <div className="mb-20">
          <div className="flex gap-4 mb-2">
            <h3 className="heading-2 mb-0">{course.title}</h3>
            <Link
              to={`/admin/courses/edit-course/${course._id}`}
              className="flex gap-1  font-light text-light-gray hover:text-white transition-colors duration-200"
            >
              <span>Edit</span>
              <PencilSquareIcon className="h-5 " strokeWidth={1.2} />
            </Link>
          </div>

          <p className="font-light text-light-gray">
            <span className="text-white">Slogan:</span> {course.slogan}
          </p>
          {course.description && (
            <p className="font-light text-light-gray">
              <span className="text-white">Description:</span>{' '}
              {course.description}
            </p>
          )}
        </div>

        <h3 className="heading-3">Chapters</h3>

        {chapters.map((chapter) => (
          <Chapters
            title={chapter.title}
            key={chapter.title}
            _id={chapter._id}
            courseId={chapter.course}
          />
        ))}
        <CreateChapter />
      </div>
    </div>
  );
};
export default Lessons;
