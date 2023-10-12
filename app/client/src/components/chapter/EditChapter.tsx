import ChapterInput from './ChapterInput';
import { FormEvent, useRef, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface EditChapterProps {
  chapterId: string;
  defaultValue?: string;
  editChapterIdOpen: boolean;
  setEditChapterIdOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditChapter: React.FC<EditChapterProps> = ({
  chapterId,
  defaultValue,
  setEditChapterIdOpen,
}) => {
  const navigate = useNavigate();
  const { id: courseId } = useParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const [chapter, setChapter] = useState<string | null>();
  const [chapterError, setChapterError] = useState<string | null>();

  const handleNewChapter = async (event: FormEvent) => {
    event.preventDefault();

    if (!chapter) return setChapterError('Chapter title is required');

    try {
      await customFetch.patch(`/chapters/${courseId}/${chapterId}`, {
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
    setEditChapterIdOpen(false);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-5">
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
            defaultValue={defaultValue}
            error={chapterError}
            placeholder="Add a title that describe the lesson"
          />
          {chapterError && <p className="text-red-light">* {chapterError}</p>}

          <div className="self-end">
            <button
              onClick={() => setEditChapterIdOpen(false)}
              className="w-max text-right self-end font-light hover:text-light-gray transition-colors duration-200 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleNewChapter}
              className="w-max text-right  font-light hover:text-light-gray transition-colors duration-200"
            >
              Update Chapter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditChapter;
