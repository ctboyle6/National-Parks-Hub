import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
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

    console.log('review:', review)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

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
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
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
