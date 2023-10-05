import { UpcomingCards } from '../..';
import { events } from '../../../constants';

const Upcoming = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-screen-wide mx-auto">
        <h2 className="heading-2">{events.title}</h2>
      </div>

      <div>
        <UpcomingCards />
      </div>
    </section>
  );
};
export default Upcoming;
