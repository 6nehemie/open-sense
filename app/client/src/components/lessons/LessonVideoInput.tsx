import { VideoCameraIcon } from '@heroicons/react/24/outline';

type LessonVideoInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LessonVideoInput: React.FC<LessonVideoInputProps> = ({ onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Video Lesson (required)*</h3>
      <p className="text-light-gray font-light text-sm">
        Select the video that will represent the lesson.
      </p>

      <div className="w-max">
        <label
          htmlFor="lesson"
          className={`text-light-gray flex flex-col items-center border-[1px] border-neutral-500 rounded-md p-4 px-8 cursor-pointer hover:bg-neutral-800 transition-colors duration-200
	  `}
        >
          <VideoCameraIcon className="h-8" strokeWidth={0.8} />
          <p className="text-xs">Upload Lesson</p>
        </label>

        <input
          type="file"
          accept="video/*"
          id="lesson"
          name="lesson"
          onChange={onChange}
          className="hidden"
        />
      </div>
    </div>
  );
};
export default LessonVideoInput;
