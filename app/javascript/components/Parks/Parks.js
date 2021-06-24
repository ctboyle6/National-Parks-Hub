import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Park from './Park'

const Parks = () => {
  const [ parks, setParks ] = useState([])

  useEffect(() => {
    // Get all parks from our API
    // update parks in our state array

    axios.get('/api/v1/parks.json')
      .then((res) => {
        setParks(res.data.data)
      })
      .catch((res) => console.log(res))
  }, [parks.length])

  const grid = parks.map((item) => {
    return (
      <Park
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div className="home">
      <div className="header">
        <h1>National Parks Hub</h1>
      </div>
      <div className="subheader">Get out and hike!</div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  )
}

export default Parks
