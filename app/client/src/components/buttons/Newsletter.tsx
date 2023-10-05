const NewsletterBtn = () => {
  return (
    <form className="">
      <div className="flex font-exo font-light border-2 border-light-gray py-2 px-2 rounded-full">
        <label htmlFor="newsletter"></label>
        <input
          placeholder="Enter Email Address"
          type="email"
          name="newsletter"
          required
          className="bg-transparent placeholder-white outline-none w-full max-w-[300px] mr-1 pl-3"
        />
        <button
          type="submit"
          className="whitespace-nowrap w-max px-5 py-1 rounded-full bg-light-gray text-dark-gray hover:bg-white transition-colors duration-200 text-sm"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default NewsletterBtn;
