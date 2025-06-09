import React from "react";
import type { Review } from "../../utlis/types";
import StarRating from "../ui/StarRating";

const dateFormatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" });
const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex-1 border border-gray-200 hover:bg-slate-100 rounded-lg sm:p-4 p-2">
      <StarRating rating={review.rating} />
      <p className="font-semibold font-roboto py-2">{review.reviewerName}</p>
      <p className="sm:line-clamp-5 line-clamp-4 text-gray-600 sm:text-md text-sm">
        {review.comment}
      </p>
      <span className="text-xs text-gray-500">Posted on {dateFormatter.format(new Date(review.date))}</span>
    </div>
  );
};

export default ReviewCard;
