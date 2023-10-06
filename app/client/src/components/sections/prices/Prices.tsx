import { PlanCard } from '../..';
import { subscriptionsPlans } from '../../../constants';

const Prices = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center w-full max-w-screen-wide mx-auto">
        <h2 className="heading-2 mb-2">{subscriptionsPlans.label}</h2>
        <h3 className="heading-3 text-center mb-10">
          All membership plans come with a{' '}
          <span className="font-semibold">30-day satisfaction guarantee.</span>
        </h3>

        <div className="flex max-[1150px]:flex-wrap justify-center gap-5">
          {subscriptionsPlans.plans.map((plan) => (
            <PlanCard
              label={plan.label}
              duration={plan.duration}
              description={plan.description}
              price={plan.price}
              priceDescription={plan.priceDescription}
              access={plan.access}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Prices;
