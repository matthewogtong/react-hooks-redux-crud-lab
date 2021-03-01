import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {

  const displayReviews = reviews.map(review => {
    return (
      <Review key={review.id} review={review}/>
    )
  })
 
  return (
      <ul>
        {displayReviews}
      </ul>
  )
}

export default Reviews;
