import { PlusCircleIcon } from '@heroicons/react/24/outline';
import ChapterInput from './ChapterInput';
import { FormEvent, useRef, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface CreateChapterProps {}

const CreateChapter: React.FC<CreateChapterProps> = () => {
  const navigate = useNavigate();
  const { id: courseId } = useParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const [chapterIsOpen, setChapterIsOpen] = useState(false);
  const [chapter, setChapter] = useState<string | null>();
  const [chapterError, setChapterError] = useState<string | null>();

  const handleNewChapter = async (event: FormEvent) => {
    event.preventDefault();

    if (!chapter) return setChapterError('Chapter title is required');

    try {
      await customFetch.post(`/chapters/${courseId}`, {
        title: chapter,
      });

      if (titleRef.current) {
        titleRef.current.value = '';
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.message);

        return setChapterError(
          error?.response?.data?.message || 'Something went wrong'
        );
      }
      return error || 'Something went wrong';
    }
    navigate('.');
    setChapter(null);
    setChapterError(null);
    setChapterIsOpen(false);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-5">
        {chapterIsOpen && (
          <form
            action=""
            onSubmit={handleNewChapter}
            className="flex flex-col gap-2 max-w-xl"
          >
            <ChapterInput
              label="Chapter Title (required)*"
              name="title"
              ref={titleRef}
              onChange={(e) => setChapter(e.target.value)}
              required={true}
              error={chapterError}
              placeholder="Add a title that describe the lesson"
            />
            {chapterError && <p className="text-red-light">* {chapterError}</p>}

            <div className="self-end">
              <button
                onClick={() => setChapterIsOpen(false)}
                className="w-max text-right self-end font-light hover:text-light-gray transition-colors duration-200 mr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleNewChapter}
                className="w-max text-right  font-light hover:text-light-gray transition-colors duration-200"
              >
                Add Chapter
              </button>
            </div>
          </form>
        )}

        {!chapterIsOpen && (
          <button
            onClick={() => setChapterIsOpen(true)}
            className="w-max flex items-center gap-2 hover:text-light-gray transition-colors duration-200"
          >
            <PlusCircleIcon className="h-6" strokeWidth={1.2} />
            <span className="font-light">New Chapter</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default CreateChapter;
