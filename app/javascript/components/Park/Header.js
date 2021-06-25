import React from 'react'

const Header = (props) => {
  const { name, avg_rating } = props.attributes
  const total = props.reviews.length

  return (
    <div className="wrapper">
      <h1>Park Name</h1>
      <div>
        <div className="totalReviews">{total} User Reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_rating} out of 5</div>
      </div>
    </div>
  )
}

export default Header
