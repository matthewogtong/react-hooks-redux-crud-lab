import React from "react";
import Restaurant from "./Restaurant"

function Restaurants({ restaurants }) {

  const displayRestaurants = restaurants.map(r => {
    return (
      <Restaurant key={r.id} restaurant={r}/>
    )
  })


  return (
    <ul>
      {displayRestaurants}
    </ul>
  )
}

export default Restaurants;
