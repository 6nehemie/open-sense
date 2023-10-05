import { UpcomingCards } from '../..';
import { events } from '../../../constants';

const Upcoming = () => {
  return (
    <section className="w-full p-side">
      <div className="relative w-full max-w-screen-wide mx-auto">
        <h2 className="heading-2">{events.title}</h2>
        <UpcomingCards />
      </div>
    </section>
  );
};
export default Upcoming;
