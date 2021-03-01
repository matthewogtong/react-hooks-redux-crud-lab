import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { reviewAdded } from "./reviewsSlice"

function ReviewInput({ restaurantId }) {

  const dispatch = useDispatch()

  const [comment, setComment] = useState("")

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(reviewAdded({ comment, restaurantId }))
    setComment("")
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">comment</label>
      <input type="text" name="comment" value={comment} onChange={handleChange}/>
      <input type="submit" value="add review"/>
    </form>
  )
}

export default ReviewInput;
