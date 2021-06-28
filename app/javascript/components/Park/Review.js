import React from 'react'

const Review = (props) => {
  const {rating, title, description} = props.attributes

  return (
    <div className="card">
      <div className="rating-container">
        <div className="rating-score">{rating}</div>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default Review
