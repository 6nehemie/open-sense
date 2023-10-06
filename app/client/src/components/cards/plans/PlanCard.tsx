import { Link } from 'react-router-dom';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface PlanCardProps {
  label: string;
  duration: string;
  description: string;
  price: string;
  priceDescription: string;
  access: {
    text: string;
    included: boolean;
  }[];
}

const PlanCard: React.FC<PlanCardProps> = ({
  label,
  duration,
  description,
  price,
  priceDescription,
  access,
}) => {
  return (
    <div
      className={`relative flex flex-col font-exo gap-5 max-[1660px]:gap-4 max-w-[416px] min-h-[602px] max-[1660px]:min-h-[550px] w-full p-5 rounded-xl overflow-hidden
	${label === 'Monthly Maven' ? 'bg-cool-gray' : ''}
	${label === 'Yearly Elite' ? 'bg-red-md' : ''}
	${label === 'Semi-Annual Specialist' ? 'bg-red-dark' : ''}

	`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-2xl max-[1660px]:text-xl font-roboto font-semibold">
          {label}
        </h4>
        <p className="whitespace-nowrap max-[1660px]:text-sm">{duration}</p>
      </div>

      <p className="font-light leading-tight max-[1660px]:text-sm">
        {description}
      </p>

      <p className="leading-none">
        <span className="text-[48px] max-[1660px]:text-[42px]">{price}</span>{' '}
        /month
      </p>
      {priceDescription && (
        <p className="text-light-gray font-light leading-tight max-[1660px]:text-sm">
          {priceDescription}
        </p>
      )}
      <div className="w-full bg-light-gray h-[.5px]"></div>
      <div className="text-lg max-[1660px]:text-base max-[1340px]:text-sm flex flex-col gap-1">
        {access.map((access, index) => (
          <div
            key={index}
            className={`flex items-center gap-2
		 ${access.included ? 'text-white' : 'text-light-gray'} 
		  `}
          >
            {access.included ? (
              <CheckIcon className="h-6 max-[1340px]:h-4" />
            ) : (
              <XMarkIcon className="h-6 max-[1340px]:h-4" />
            )}
            <p>{access.text}</p>
          </div>
        ))}
      </div>

      <Link
        to={'.'}
        className="max-[1340px]:text-sm mt-auto w-max transition-colors duration-200 bg-red-light px-7 py-2 rounded-full hover:bg-red-light-dark hover:text-white"
      >
        Sign Up
      </Link>
    </div>
  );
};
export default PlanCard;
