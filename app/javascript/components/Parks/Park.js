import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'
import { Modal } from '../Modal'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 4px 12px;
  margin: 14px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`

const Park = (props) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Card>
      <LinkWrapper>
        <Link to={`/parks/${props.attributes.park_code}`}>
          <ParkName>{props.attributes.name}</ParkName>
          <Rating rating={props.attributes.avg_rating}/>
        </Link>
      </LinkWrapper>
      <ModalButton onClick={openModal}>See Park</ModalButton>
      <Modal showModal={showModal} setShowModal={setShowModal}  name={props.attributes.name} park_code={props.attributes.park_code}/> 
    </Card>
  )
}

export default Park
