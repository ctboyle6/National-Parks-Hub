import React, { useState, useEffect } from 'react'
import Park from './Park'
import styled from 'styled-components'
import ScrollButton from '../ScrollButton'

// Redux
import { fetchParks } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background: #65776a;
`

const Header = styled.div`
  padding: 60px 0px 10px 0px;

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
  color: #fff;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const SearchBar = styled.div`
  height: 40px;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 20px;

  input {
    width: 55%
  }
`

const Parks = () => {
  const dispatch = useDispatch();
  const parks = useSelector((state) => state.parks.parks);

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchParks());
  }

  const showParks = () => {
    if (parks) {
      return parks.data.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((item) => {
        return (
          <Park
            key={item.attributes.name}
            attributes={item.attributes}
          />
        )
      })
    }
  }

  return (
    <Dashboard>
      <Header>
        <h1>National Parks Hub</h1>
      </Header>
      <Subheader>Get out and hike!</Subheader>
      <SearchBar>
        <input 
          type="text"
          placeholder="Search a park..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </SearchBar>
      <Grid>
        {showParks()}
      </Grid>
      <ScrollButton />
    </Dashboard>
  )
}

export default Parks
