import EventsCard from '../../cards/events/EventsCard';
import { events } from '../../../constants';
import { Newsletter } from '../..';

const UpcomingCards = () => {
  return (
    <div>
      <div className="flex gap-[21px]">
        {events.featured.map((event) => (
          <EventsCard
            date={event.date}
            label={event.label}
            text={event.text}
            imageSrc={event.imageSrc}
          />
        ))}

        <div className="flex flex-col gap-5 items-center justify-center h-[302px] w-[562px] rounded-xl overflow-hidden bg-cool-gray">
          <h5 className="text-center text-xl font-bold ">
            {events.newsletter.label}
          </h5>
          <p className="text-center font-exo font-light leading-none max-w-[340px]">
            {events.newsletter.text}
          </p>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};
export default UpcomingCards;
