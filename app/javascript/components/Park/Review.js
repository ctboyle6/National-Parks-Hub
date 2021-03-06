import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

// Redux
import { useDispatch } from 'react-redux'
import { deleteReview } from '../../actions'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.3);
  background: #fff;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`

const DeleteButton = styled.div`
  text-align: end;
  cursor: pointer;
`

const Review = (props) => {
  const dispatch = useDispatch();

  const {rating, title, description, user_id} = props.attributes

  const handleDelete = () => {
    dispatch(deleteReview(props.reviewId))
  }

  const showDeleteButton = () => {
    if (props.currentUser.id === user_id) {
      return (
        <DeleteButton
          onClick={handleDelete}
        >
          <i className="fas fa-trash-alt"></i>
        </DeleteButton>
      )
    }
  }

  return (
    <Card>
      <RatingContainer>
        <Rating rating={rating}/>
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {showDeleteButton()}
    </Card>
  )
}

export default Review
