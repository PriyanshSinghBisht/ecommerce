import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const StarRating = ({ rating }: {rating : number}) => {
  return (
    <div className="fill-yellow-500 text-yellow-500 flex">
      {[...Array(Math.floor(rating))].map((_, index) => {
        const ratingValue = index + 0.5;
        return (
          <span key={index}>
            {rating >= ratingValue ? (
              <FaStar />
            ) : rating >= index ? (
              <FaStarHalf />
            ) : (
              <FaStar />
            )}
          </span>
        );
      })}
      <span>
        {rating > Math.floor(rating) ? <FaStarHalf /> : ""}
      </span>
    </div>
  )
}

export default StarRating