const AdminTextArea = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <label htmlFor="Description">Description (optional)*</label>
      <textarea
        name="Description"
        id="Description"
        cols={30}
        rows={10}
        placeholder="Tell your members about your course"
        className={`bg-inherit border border-neutral-800 rounded-md p-2 outline-none font-light`}
      ></textarea>
    </div>
  );
};
export default AdminTextArea;
