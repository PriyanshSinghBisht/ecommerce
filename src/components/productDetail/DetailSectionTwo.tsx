import type { ProductType } from "../../utlis/types";
import ReviewCard from "./ReviewCard";

const DetailSectionTwo = ({
  product,
}: {
  product: ProductType | undefined;
}) => {
  return (
    <div className="mx-2">
      <h4 className="text-lg font-roboto mt-8 mb-4">Rating & Reviews</h4>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        {product?.reviews.map((review, index) => (
          <ReviewCard key={review.reviewerEmail+index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default DetailSectionTwo;
