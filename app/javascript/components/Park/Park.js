import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import Weather from './Weather'
import styled from 'styled-components'
// import { BarLoader } from 'react-spinners'

// Redux
import { fetchPark } from '../../actions'
import { fetchReviews } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

// Style
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
  const dispatch = useDispatch();
  const park = useSelector((state) => state.park);
  let reviews = useSelector((state) => state.reviews);
  const weather = useSelector((state) => state.park.weather);

  const [loaded, setLoaded] = useState(false)
  const [review, setReview] = useState({})

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    dispatch(fetchPark(props.match.params.park_code));
    dispatch(fetchReviews(props.match.params.park_code));
  }

  // -- BEGIN REVIEWS --

  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const park_id = park.data.id
    axios.post('/api/v1/reviews', { review, park_id })
      .then( res => {
        const included = [...park.included, res.data.data]
        setPark({ ...park, included })
        setReview({ title: '', description: '', rating: 0 })
      })
      .catch( res => {})
  }

  const setRating = (rating, event) => {
    setReview({...review, rating})
  }

  const showReviews = () => {
    if (park.park) {
      return reviews = park.park.included.map((review, index) => {
        return (
          <Review
            key={index}
            attributes={review.attributes}
          />
        )
      })
    }
  }

  // -- END REVIEWS --

  const showPark = () => {
    if (park.park) {
      return (
        <Fragment>
          <Column>
            <Main>
                <Header
                  attributes={park.park.data.attributes}
                  reviews={park.park.included}
                />
                <Weather
                  weather={weather}
                />
              {showReviews()}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={park.park.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      )
    } else {
      return (
        <p>Just a sec..</p>
      )
    }
  }

  return (
    <Wrapper>
      {showPark()}
    </Wrapper>
  )
}

export default Park
