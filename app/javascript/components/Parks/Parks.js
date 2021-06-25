import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Park from './Park'
import styled from 'styled-components'

const Dashboard = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

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
    <Dashboard>
      <Header>
        <h1>National Parks Hub</h1>
      </Header>
      <Subheader>Get out and hike!</Subheader>
      <Grid>
        <ul>{grid}</ul>
      </Grid>
    </Dashboard>
  )
}

export default Parks
