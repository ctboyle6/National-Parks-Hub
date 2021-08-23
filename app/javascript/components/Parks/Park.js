import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'
import { Modal } from '../Modal'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchPark } from '../../actions'


const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 160px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
`

const ParkName = styled.div`
  padding: 20px 0 10px 0;
  font-weight: bold;
`

const LinkWrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
  }
`

const ModalButton = styled.button`
  margin: 8px auto;
  padding: 2px 8px;
  border-radius: 8px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f06e";
`

const Park = (props) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.park.weather);

  const openModal = () => {
    dispatch(fetchPark(props.attributes.park_code))
    setShowModal(prev => !prev)
  }

  const addHighlight = (e) => {
    e.currentTarget.style.boxShadow = '1px 1px 12px rgba(233, 175, 53, 1)'
  }

  const removeHighlight = (e) => {
    e.currentTarget.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.6)'
  }

  return (
    <Card onMouseEnter={addHighlight} onMouseLeave={removeHighlight}>
      <LinkWrapper>
        <Link to={`/parks/${props.attributes.park_code}`}>
          <ParkName>{props.attributes.name}</ParkName>
          <Rating rating={props.attributes.avg_rating}/>
        </Link>
      </LinkWrapper>
      <ModalButton onClick={openModal}><i className="fas fa-eye"></i></ModalButton>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}  
        name={props.attributes.name} 
        park_code={props.attributes.park_code}
        weather={weather}
      /> 
    </Card>
  )
}

export default Park
