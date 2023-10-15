import { useContext, useRef, useState } from 'react';
import { CourseContext } from '../../../pages/StreamLayout';
import { CourseContextType } from '../../../types/courseContextType';
import { Link, useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useClickOutside } from '../../../hooks';

type VideoProps = {
  videoUrl: string;
};

const Video: React.FC<VideoProps> = ({ videoUrl }) => {
  const params = useParams();
  const nextMenuRef = useRef<HTMLDivElement>(null);
  const [nextMenu, setNextMenu] = useState(false);

  useClickOutside(nextMenuRef, () => {
    setNextMenu(false);
  });

  const { nextLesson } = useContext(CourseContext) as CourseContextType;

  const handleVideoEnd = () => {
    setNextMenu(true);
    document.exitFullscreen();
  };

  return (
    <div className="relative p-side py-6 mx-auto">
      <video
        src={videoUrl}
        controls
        preload="auto"
        onEnded={handleVideoEnd}
        controlsList="nodownload"
        className="relative rounded-2xl videoSize mx-auto z-[0]"
      ></video>

      {nextLesson && nextMenu && (
        <div className="fixed z-100 bg-dark-gray bg-opacity-70 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <div
            ref={nextMenuRef}
            className=" flex gap-6 font-exo bg-dark-gray bg-opacity-90 backdrop-blur-xl w-max p-5 rounded-md z-10"
          >
            <button
              onClick={() => setNextMenu(false)}
              className="bg-light-gray bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-200 rounded-md p-1 self-start"
            >
              <XMarkIcon className="h-6" />
            </button>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-normal">Lesson Completed</h3>
              <p className="text-light-gray">Next: {nextLesson.title}</p>

              <Link
                to={`/browse/courses/${params.courseId}/${nextLesson._id}`}
                onClick={() => setNextMenu(false)}
                className=" text-center bg-neutral-100 text-dark-gray rounded-md py-2 w-[250px] mt-2 hover:bg-neutral-300 transition-colors duration-200"
              >
                Next Lesson
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Video;
