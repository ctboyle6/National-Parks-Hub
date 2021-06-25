import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const Park = (props) => {
  const [park, setPark] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // api/v1/parks/park_code
    // console.log(props.match.params.park_code)
    const code = props.match.params.park_code
    const url = `/api/v1/parks/${code}`

    axios.get(url)
      // .then( res => setPark(res.data))
      .then( res => {
        setPark(res.data)
        setLoaded(true)
      })
      .catch( res => console.log(res))
  }, [])

  return (
    <div className="wrapper">
      <div className="column">
        {
          loaded &&
          <Header
            attributes={park.data.attributes}
            reviews={park.included}
          />
        }
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[Review Form goes here]</div>
      </div>
    </div>
  )
}

export default Park
