import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { LessonTextArea, LessonVideoInput } from '..';
import ChapterInput from '../chapter/ChapterInput';
import { FormEvent, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { useNavigate } from 'react-router-dom';

interface AddLessonProps {
  chapterId: string;
}

type Lesson = {
  title: string;
  description: string;
  lesson: File | null;
};

const AddLesson: React.FC<AddLessonProps> = ({ chapterId }) => {
  const navigate = useNavigate();
  const [addLessonIsOpen, setAddLessonIsOpen] = useState(false);
  const [lesson, setLesson] = useState<Lesson>({
    title: '',
    description: '',
    lesson: null,
  });
  console.log(lesson);
  const [lessonError, setLessonError] = useState<string | null>(null);

  // /lessons/6526bb37638736dd316fi23id
  const handleNewLessonUpload = async (event: FormEvent) => {
    event.preventDefault();

    if (!lesson.title) return setLessonError('Lesson title is required');
    if (!lesson.lesson) return setLessonError('Lesson video is required');

    // To Send as a formData
    const formData = new FormData();
    formData.append('lesson', lesson.lesson);
    formData.append('title', lesson.title);
    if (lesson.description) formData.append('description', lesson.description);

    try {
      await customFetch.post(`/lessons/${chapterId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      return console.log(error);
    }

    setAddLessonIsOpen(false);
    setLessonError(null);
    navigate('.');
  };

  const handleLessonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    if (!file) return;
    setLesson({ ...lesson, lesson: file });
  };

  const handleCancel = () => {
    setAddLessonIsOpen(false);
    setLessonError(null);
  };

  return (
    <div className="pl-6">
      {addLessonIsOpen ? (
        <form
          action=""
          onSubmit={handleNewLessonUpload}
          className="flex flex-col gap-6 max-w-xl"
        >
          <LessonVideoInput onChange={handleLessonChange} />
          <div>
            <ChapterInput
              label="Lesson Title (required)*"
              name="title"
              //   ref={titleRef}
              onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
              required={true}
              error={lessonError}
              placeholder="Add a title that describe the lesson"
            />
            {lessonError && <p className="text-red-light">* {lessonError}</p>}
          </div>
          <LessonTextArea
            onChange={(e) =>
              setLesson({ ...lesson, description: e.target.value })
            }
          />

          <div className="self-end">
            <button
              onClick={handleCancel}
              className="w-max text-right self-end font-light hover:text-light-gray transition-colors duration-200 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-max text-right  font-light hover:text-light-gray transition-colors duration-200"
            >
              Add Chapter
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAddLessonIsOpen(true)}
          className="w-max flex items-center gap-2 text-sky-400 hover:text-sky-600 transition-colors duration-200"
        >
          <PlusCircleIcon className="h-6" strokeWidth={1.2} />
          <span className="font-light">New Lesson</span>
        </button>
      )}
    </div>
  );
};
export default AddLesson;
