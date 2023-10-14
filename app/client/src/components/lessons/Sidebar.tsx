import { useContext, useRef, useState } from 'react';
import { CourseContext } from '../../pages/StreamLayout';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useClickOutside } from '../../hooks';

const Sidebar = () => {
  const params = useParams();

  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const course = useContext(CourseContext);

  useClickOutside(sidebarRef, () => {
    setSidebarOpen(false);
  });

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        ref={sidebarRef}
        className={`fixed bottom-5 left-5 sidebar flex transition-transform duration-200
	 	${!sidebarOpen ? 'translate-x-[-93%]' : 'translate-x-0'} 
	  `}
      >
        <div
          className={`w-[430px] max-[710px]:w-[75vw] h-full bg-dark-gray bg-opacity-95 backdrop-blur-xl rounded-xl overflow-hidden font-exo border-[1px] border-light-gray border-opacity-20 overflow-y-scroll`}
        >
          <div>
            {course?.chapters.map((chapter) => (
              <div key={chapter._id}>
                <div className="p-5 py-4 bg-neutral-800 rounded-xl mb-2">
                  <h1 className="text-2xl font-semibold max-md:text-xl max-sm:text-lg">
                    {chapter.title}
                  </h1>
                </div>
                <div className="pl-6 pr-2 w-full flex flex-col gap-1 max-md:text-sm">
                  {chapter.lessons.map((lesson) => (
                    <Link
                      to={`/browse/courses/${course._id}/${lesson._id}`}
                      onClick={handleCloseSidebar}
                      key={lesson._id}
                      className={`p-3 hover:bg-neutral-800 rounded-lg transition-colors duration-200
					 ${params.lessonId === lesson._id ? 'bg-neutral-800' : ''} 
					  `}
                    >
                      {lesson.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={handleSidebar}
          className="bg-neutral-700 h-max mt-2 p-4 rounded-r-lg hover:bg-neutral-800 transition-colors duration-200 cursor-pointer overflow-hidden shadow-lg shadow-neutral-800"
        >
          {!sidebarOpen ? (
            <Bars3Icon className="h-6 max-md:h-5 max-sm:h-4" />
          ) : (
            <ArrowLeftIcon className="h-6 max-md:h-5 max-sm:h-4" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
