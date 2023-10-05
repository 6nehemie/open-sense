interface EventsCardProps {
  date: string;
  label: string;
  text: string;
  imageSrc: string;
}

const EventsCard: React.FC<EventsCardProps> = ({
  date,
  label,
  text,
  imageSrc,
}) => {
  return (
    <div className="relative h-[302px] w-[562px] rounded-xl overflow-hidden">
      <img
        src={imageSrc}
        height={302}
        width={562}
        alt="background image"
        className="absolute object-cover z-[-1] h-full w-full"
      />
      <div className="h-full w-full flex flex-col justify-between p-5 ">
        <p className="font-exo text-[12px] font-light text-dark-gray py-1 px-3 rounded-full bg-white w-max">
          {date}
        </p>
        <div>
          <h5 className="font-roboto text-xl font-bold leading-tight">
            {label}
          </h5>
          <p className="font-exo text-[15px] font-semibold text-light-gray">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventsCard;
