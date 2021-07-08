import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'
import { Modal } from '../Modal'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const ParkName = styled.div`
  padding: 20px 0 10px 0;
  font-weight: bold;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 3px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`

const ModalButton = styled.button`
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const Park = (props) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Card>
      <ParkName>{props.attributes.name}</ParkName>
      <Rating rating={props.attributes.avg_rating}/>
      <LinkWrapper>
        <Link to={`/parks/${props.attributes.park_code}`}>View Park</Link>
      </LinkWrapper>
      <ModalButton onClick={openModal}>I'm a Modal</ModalButton>
      <Modal showModal={showModal} setShowModal={setShowModal}/> 
    </Card>
  )
}

export default Park
