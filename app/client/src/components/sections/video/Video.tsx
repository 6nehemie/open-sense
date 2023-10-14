type VideoProps = {
  videoUrl: string;
};

const Video: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <div className="p-side py-6 mx-auto">
      <video
        src={videoUrl}
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
