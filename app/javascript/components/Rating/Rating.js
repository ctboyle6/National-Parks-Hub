import React from 'react'
import './Rating.css'

const Rating = (props) => {
  const score = (props.rating/5) * 100

  return (
    // <span className="star-wrapper">
    //   <span className="stars" style={{width: score + "%"}}></span>
    // </span>

    <div className="rating">
      <div className="rating-upper" style={{width: score + "%"}}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
      </div>
      <div className="rating-lower">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
      </div>
    </div>
  )
}

export default Rating
