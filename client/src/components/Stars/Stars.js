import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ rating }) => {
  const starCount = 5;
  let wholeStars = Math.floor(starCount);
  let halfStar = starCount - wholeStars >= 0.5;

  return (
    <div>
      {[...Array(starCount)].map((star, i) => {
        if (i < wholeStars) {
          return <FaStar className={star} key={i} />;
        } else if (i === wholeStars && halfStar) {
          return <FaStarHalfAlt className={star} key={i} />;
        } else {
          return <FaRegStar className={star} key={i} />;
        }
      })}
    </div>
  );
};

export default Stars;
