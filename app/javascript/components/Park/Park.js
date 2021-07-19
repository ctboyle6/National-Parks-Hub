import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import Weather from './Weather'
import styled from 'styled-components'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Redux
import { fetchUser } from '../../actions'
import { fetchPark } from '../../actions'
import { fetchReviews } from '../../actions'
import { createReview } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

// Style
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #65776a;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: #000;
  }
`

const LinkWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  width: 130px;
  margin: 18px 0 0 48px;
  padding: 6px;
  background: #000;
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;
  }
`

const SessionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #65776a;
  transform: translateX(50%);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  border-radius: 2px;

  div {
    width: 360px;
    margin: 0 auto;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
  }
`

const Main = styled.div`
  padding-left: 50px;
  margin-right: 32px;
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  height: 100px;
  background: #65776a;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  padding: 10px;
  transform: translate(0%, 200%);
  color: #fff;
  font-weight: bold;
  padding: 10px;
  transform: translate(100%, 200%);
`

// Mapbox
const Map = ReactMapboxGl({
  accessToken:
  process.env.REACT_APP_MAPBOX_API_KEY
});

// Component 
const Park = (props) => {
  const dispatch = useDispatch();
  const park = useSelector((state) => state.park);
  let reviews = useSelector((state) => state.reviews.reviews);
  const weather = useSelector((state) => state.park.weather);
  const currentUser = useSelector((state) => state.user.user);

  // const [loaded, setLoaded] = useState(false)
  const [review, setReview] = useState({})
  const [ stateReviews, setStateReviews ] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (reviews) {
      setStateReviews(reviews)
    }
  }, [reviews])

  const fetchData = () => {
    dispatch(fetchPark(props.match.params.park_code));
    dispatch(fetchReviews(props.match.params.park_code));
    dispatch(fetchUser());
  }

  // -- BEGIN REVIEWS --

  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const park_id = park.park.data.id
    const park_code = props.match.params.park_code

    dispatch(createReview(park_code, park_id, review.title, review.description, review.rating));

    setReview({ title: '', description: '', rating: 0 });
  }

  const setRating = (rating, event) => {
    setReview({...review, rating})
  }

  const showReviews = () => {
    if (stateReviews.length) {
      return stateReviews.map((review, index) => {
        return (
          <Review
            key={index}
            attributes={review.attributes}
            reviewId={review.id}
          />
        )
      })
    } else {
      return null
    }
  }

  // -- END REVIEWS --

  const showPark = () => {
    if (park.park) {
      return (
        <Fragment>
          <Column>
            <LinkWrapper>
              <Link to="/">Back to Parks</Link>
            </LinkWrapper>
            <Main>
              <Header
                attributes={park.park.data.attributes}
                reviews={park.park.included}
              />
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: '50vh',
                  width: '45vw'
                }}
                center={[park.park.data.attributes.longitude, park.park.data.attributes.latitude]}
              >
              </Map>
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
    } if (currentUser === null) {
      return (
        <SessionButtonContainer>
          <LinkWrapper>
            <Link to="/users/sign_in">Please sign in to see park and leave a review</Link>
          </LinkWrapper>
        </SessionButtonContainer>
      )
    } else {
      return (
        <LoadingWrapper>
          <h4>Just a sec..</h4>
        </LoadingWrapper>
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
