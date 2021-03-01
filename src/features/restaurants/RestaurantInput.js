import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { restaurantAdded } from "./restaurantsSlice"

function RestaurantInput() {

  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setText(event.target.value)
  }

  console.log(text)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(restaurantAdded(text))
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={text} onChange={handleChange}/>
      <input type="submit" value="Add Restaurant"/>
    </form>
  )
}

export default RestaurantInput;
