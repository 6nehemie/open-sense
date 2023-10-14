import { LessonTextArea } from '..';
import ChapterInput from '../chapter/ChapterInput';
import { FormEvent, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface EditLessonProps {
  title: string;
  description: string;
  lessonId: string;
}

const EditLesson: React.FC<EditLessonProps> = ({
  lessonId,
  title,
  description,
}) => {
  const navigate = useNavigate();

  const [editLessonIdOpen, setEditLessonIdOpen] = useState(false);
  const [addLessonLoading, setAddLessonLoading] = useState(false); // TODO: add loading state
  const [lesson, setLesson] = useState({
    title,
    description,
    lessonId,
  });

  const [lessonError, setLessonError] = useState<string | null>(null);

  // SEND UPDATE REQUEST
  const handleUpdateLesson = async (event: FormEvent) => {
    event.preventDefault();
    setAddLessonLoading(true);

    if (!lesson.title) {
      setAddLessonLoading(false);
      setLessonError('Lesson title is required');
      return;
    }

    const lessonUpdate = {
      title: lesson.title,
      description: lesson.description,
    };

    try {
      await customFetch.patch(`/lessons/lesson/${lessonId}`, lessonUpdate);
    } catch (error) {
      setAddLessonLoading(false);
      return console.log(error);
    }

    setLessonError(null);
    setAddLessonLoading(false);
    setEditLessonIdOpen(false);

    setTimeout(() => {
      navigate('.');
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={() => setEditLessonIdOpen(true)}
        className="flex gap-1 text-light-gray hover:text-white duration-200 transition-colors"
      >
        <span className="text-sm font-light">Edit</span>
        <PencilSquareIcon className="h-4" strokeWidth={1.2} />
      </button>

      {editLessonIdOpen && (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-40 backdrop-blur-sm z-[100]">
          <form
            action=""
            onSubmit={handleUpdateLesson}
            className="flex flex-col gap-6 w-full max-w-xl bg-neutral-900 p-6 rounded-md border-[1px] border-light-gray border-opacity-20"
          >
            <div>
              <ChapterInput
                label="Lesson Title (required)*"
                name="title"
                defaultValue={lesson.title}
                onChange={(e) =>
                  setLesson({ ...lesson, title: e.target.value })
                }
                required={true}
                error={lessonError}
                placeholder="Add a title that describe the lesson"
              />
              {lessonError && <p className="text-red-light">* {lessonError}</p>}
            </div>
            <LessonTextArea
              defaultValue={lesson.description}
              onChange={(e) =>
                setLesson({ ...lesson, description: e.target.value })
              }
            />

            <div className="self-end">
              <button
                onClick={() => setEditLessonIdOpen(false)}
                className="w-max text-right self-end font-light hover:text-light-gray transition-colors duration-200 mr-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={addLessonLoading}
                className={`w-max text-right  font-light hover:text-light-gray transition-colors duration-200
                ${addLessonLoading ? 'text-sky-500 cursor-not-allowed' : ''}
              `}
              >
                {addLessonLoading ? 'Uploading lesson...' : 'Update Lesson'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default EditLesson;
