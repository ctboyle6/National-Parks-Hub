import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

const Park = (props) => {
  const [park, setPark] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const code = props.match.params.park_code
    const url = `/api/v1/parks/${code}`

    axios.get(url)
      .then( res => {
        setPark(res.data)
        setLoaded(true)
      })
      .catch( res => console.log(res))
  }, [])

  const handleChange = (event) => {
    // console.log('name:', event.target.name, 'value:', event.target.value)

    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const park_id = park.data.id
    axios.post('/api/v1/reviews', { review, park_id })
      .then( res => {
        const included = [...park.included, res.data]
        setPark({ ...park, included })
        setReview({ title: '', description: '', rating: 0 })
      })
      .catch( res => {})
  }

  const setRating = (rating, event) => {
    setReview({...review, rating})
  }

  const reviews = park.included.map((review, index) => {
    return (
      <Review
        key={index}
        attributes={review.attributes}
      />
    )
  })

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Column>
            <Main>
                <Header
                  attributes={park.data.attributes}
                  reviews={park.included}
                />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={park.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Park
