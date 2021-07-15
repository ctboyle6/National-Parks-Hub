import React from 'react'
// import './Rating.css'
import styled from 'styled-components'

const RatingWrapper = styled.div`
  display: inline-block;
  unicode-bidi: bidi-override;
  color: #888888;
  font-size: 24px;
  height: 25px;
  width: auto;
  margin: 0;
  position: relative;
  padding: 0;
`

const RatingUpper = styled.div`
  color: #E9C635;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
`

const RatingLower = styled.div`
  padding: 0;
  display: flex;
  z-index: 0;
`

const Rating = (props) => {
  const score = (props.rating/5) * 100

  return (
    // <span className="star-wrapper">
    //   <span className="stars" style={{width: score + "%"}}></span>
    // </span>

    <RatingWrapper>
      <RatingUpper style={{width: score + "%"}}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
      </RatingUpper>
      <RatingLower>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
      </RatingLower>
    </RatingWrapper>
  )
}

export default Rating
