import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
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

  return (
    <Wrapper>
      <Column>
        <div className="main">
          {
            loaded &&
            <Header
              attributes={park.data.attributes}
              reviews={park.included}
            />
          }
          <div className="reviews"></div>
        </div>
      </Column>
      <Column>
        <div className="review-form">[Review Form goes here]</div>
      </Column>
    </Wrapper>
  )
}

export default Park
