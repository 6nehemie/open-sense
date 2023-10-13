const Video = () => {
  return (
    <div className="p-side py-6 mx-auto">
      <video
        src="https://res.cloudinary.com/db7ums0sv/video/upload/v1697184568/uvqyekcacclyefj6niyh.mp4"
        controls
        preload="auto"
        controlsList="nodownload"
        className="rounded-2xl videoSize mx-auto"
      >
        Video
      </video>
    </div>
  );
};
export default Video;
