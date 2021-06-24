import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  const list = parks.map((item) => {
    return (
      <li key={item.attributes.name}>{item.attributes.name}</li>
    )
  })

  return (
    <div>
      <div>This is the Parks#index view for our App</div>
      <ul>{list}</ul>
    </div>
  )
}

export default Parks
