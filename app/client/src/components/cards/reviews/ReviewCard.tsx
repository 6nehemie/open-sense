interface ReviewCardProps {
  name: string;
  imageSrc: string;
  text: string;
  country: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  imageSrc,
  text,
  country,
}) => {
  return (
    <div className="flex flex-col gap-6 p-5 font-exo rounded-xl bg-dark-gray bg-opacity-40 border-2 border-light-gray border-opacity-10 max-w-[463px] w-full">
      <div className="flex items-center gap-5">
        <img
          src={imageSrc}
          height={40}
          width={40}
          alt={`Profile image of ${name}`}
          className="rounded-full aspect-square object-cover w-10 h-10"
        />
        <p className="">{name}</p>
      </div>
      <p className="leading-tight">{text}</p>
      <p className="text-light-gray text-[15px]">{country}</p>
    </div>
  );
};
export default ReviewCard;
