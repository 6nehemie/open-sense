import { useState } from 'react';
import { AddLesson, EditChapter, Lessons } from '..';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import customFetch from '../../utils/customFetch';
import { useNavigate } from 'react-router-dom';

interface ChaptersProps {
  _id: string;
  title: string;
  key: string;
  courseId: string;
}

const Chapters: React.FC<ChaptersProps> = ({ title, _id, courseId }) => {
  const navigate = useNavigate();
  const [editChapterIdOpen, setEditChapterIdOpen] = useState(false);

  const handleDeleteChapter = async () => {
    try {
      await customFetch.delete(`/chapters/${courseId}/${_id}`);
    } catch (error) {
      console.log(error);
    }
    navigate('.');
  };

  return (
    <div className="mb-12">
      {!editChapterIdOpen ? (
        <div className="mb-4 flex gap-4">
          <h4 className="heading-3 m-0 text-lg">{title}</h4>

          <button
            onClick={() => setEditChapterIdOpen(true)}
            className="flex gap-1 text-light-gray hover:text-white duration-200 transition-colors"
          >
            <span className="text-base font-light">Edit</span>
            <PencilSquareIcon className="h-5" strokeWidth={1.2} />
          </button>

          <button
            onClick={handleDeleteChapter}
            className="flex gap-1 text-red-light hover:text-red-light-dark duration-200 transition-colors"
          >
            <span className='className="text-base font-light'>Delete</span>
            <TrashIcon className="h-5" strokeWidth={1.2} />
          </button>
        </div>
      ) : (
        <EditChapter
          chapterId={_id}
          defaultValue={title}
          editChapterIdOpen={editChapterIdOpen}
          setEditChapterIdOpen={setEditChapterIdOpen}
        />
      )}

      <div>
        <div>{/* Lessons already created */}</div>
        <Lessons chapterId={_id} />

        {/* Create new lessons */}
        <AddLesson chapterId={_id} />
      </div>
    </div>
  );
};
export default Chapters;
