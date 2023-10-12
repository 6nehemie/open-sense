interface LessonTextAreaProps {
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const LessonTextArea: React.FC<LessonTextAreaProps> = ({
  defaultValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <label htmlFor="Description">Description (optional)*</label>
      <textarea
        name="Description"
        id="Description"
        cols={30}
        rows={10}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder="Tell your members about this lesson."
        className={`bg-inherit border border-neutral-800 rounded-md p-2 outline-none font-light`}
      ></textarea>
    </div>
  );
};
export default LessonTextArea;
