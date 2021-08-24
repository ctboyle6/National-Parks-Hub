import React, { useState, useEffect } from 'react'
import Park from './Park'
import styled from 'styled-components'
import ScrollButton from '../ScrollButton'
import ClipLoader from "react-spinners/ClipLoader";

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
    font-family: 'Lora', serif;
    font-size: 70px;
    font-weight: bold;
    color: #fff;
  }
`

const Subheader = styled.div`
  font-weight: 400;
  font-size: 26px;
  color: #fff;
  font-family: 'Lora', serif;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const SearchBar = styled.div`
  height: 40px;
  font-size: 20px;
  margin: 30px 0 20px 0;

  input {
    width: 55%
  }
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
    } else {
      return (
        <LoadingWrapper>
          <ClipLoader color={"#ffffff"} size={60} />
        </LoadingWrapper>
      )
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
