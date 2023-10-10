import { coursesFeatured } from '../../../constants';

interface CardProps {
  label: string;
  slogan: string;
  duration?: string;
  imageSrc: string | null;
}

const Card: React.FC<CardProps> = ({ label, slogan, duration, imageSrc }) => {
  return (
    <div
      className={`relative h-[379px] w-[271px] aspect-square overflow-hidden rounded-xl`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          height={379}
          width={271}
          alt={`Image preview of ${coursesFeatured.courses[0].label}`}
          className="absolute z-10 h-full object-cover"
        />
      )}

      <div className="absolute w-full h-full card-gradient z-20"></div>
      {!imageSrc && (
        <div className="absolute w-full h-full bg-neutral-600 bg-opacity-20 z-20"></div>
      )}
      <div className="flex flex-col gap-1 w-full h-full items-center justify-end p-2 font-roboto leading-tight text-center z-20">
        <h1 className="text-[32px] font-bold uppercase leading-none z-20">
          {label}
        </h1>
        <p className="text-[15px] font-normal max-w-[190px] z-20">{slogan}</p>
        <p className="font-thin text-[12px] text-light-gray z-20">{duration}</p>
      </div>
    </div>
  );
};
export default Card;
