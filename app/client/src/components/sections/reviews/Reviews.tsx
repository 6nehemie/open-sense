import { ReviewCard } from '../..';
import { reviews } from '../../../constants';

const Reviews = () => {
  return (
    <section className="bg-to-dark">
      <div className="p-side">
        <div className="flex flex-col items-center w-full max-w-screen-wide mx-auto">
          <h2 className="heading-2 mb-2">{reviews.title}</h2>
          <h3 className="heading-3 mb-8">{reviews.text}</h3>

          <div className="flex justify-center gap-5 flex-wrap">
            {reviews.userReviews.map((review) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                imageSrc={review.imageSrc}
                text={review.text}
                country={review.country}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
