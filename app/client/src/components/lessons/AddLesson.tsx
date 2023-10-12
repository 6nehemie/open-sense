import { PlusCircleIcon } from '@heroicons/react/24/outline';

const AddLesson = () => {
  return (
    <div className="pl-6">
      <button className="w-max flex items-center gap-2 text-sky-400 hover:text-sky-600 transition-colors duration-200">
        <PlusCircleIcon className="h-6" strokeWidth={1.2} />
        <span className="font-light">New Lesson</span>
      </button>
    </div>
  );
};
export default AddLesson;
