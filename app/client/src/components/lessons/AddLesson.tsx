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
  const [addLessonLoading, setAddLessonLoading] = useState(false); // TODO: add loading state
  const [lesson, setLesson] = useState<Lesson>({
    title: '',
    description: '',
    lesson: null,
  });
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [lessonError, setLessonError] = useState<string | null>(null);

  // /lessons/6526bb37638736dd316fi23id
  const handleNewLessonUpload = async (event: FormEvent) => {
    event.preventDefault();
    setAddLessonLoading(true);

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
      setAddLessonLoading(false);
      return console.log(error);
    }

    setAddLessonIsOpen(false);
    setLessonError(null);
    setAddLessonLoading(false);

    setTimeout(() => {
      navigate('.');
    }, 1000);
  };

  const handleLessonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    if (!file) return setVideoUrl(null);
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setLesson({ ...lesson, lesson: file });
  };

  const handleCancel = () => {
    setAddLessonIsOpen(false);
    setLessonError(null);
  };

  const handleRemoveVideo = () => {
    setLesson({ ...lesson, lesson: null });
    setVideoUrl(null);
  };

  return (
    <div className="pl-6">
      {addLessonIsOpen ? (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-40 backdrop-blur-sm z-[40]">
          <form
            action=""
            onSubmit={handleNewLessonUpload}
            className="flex flex-col gap-6 w-full max-w-xl bg-neutral-900 p-6 rounded-md border-[1px] border-light-gray border-opacity-20"
          >
            <div className="">
              {!videoUrl ? (
                <LessonVideoInput onChange={handleLessonChange} />
              ) : (
                <div className="flex gap-4 items-start">
                  <video
                    src={videoUrl}
                    width={250}
                    className={`text-light-gray flex flex-col items-center  rounded-md cursor-pointer`}
                    controls
                  ></video>
                  <p
                    onClick={handleRemoveVideo}
                    className="cursor-pointer font-light text-light-gray"
                  >
                    <span>Remove</span>
                  </p>
                </div>
              )}
            </div>
            <div>
              <ChapterInput
                label="Lesson Title (required)*"
                name="title"
                //   ref={titleRef}
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
                disabled={addLessonLoading}
                className={`w-max text-right  font-light hover:text-light-gray transition-colors duration-200
                ${addLessonLoading ? 'text-sky-500 cursor-not-allowed' : ''}
              `}
              >
                {addLessonLoading ? 'Uploading lesson...' : 'Add Lesson'}
              </button>
            </div>
          </form>
        </div>
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
