import React, { useRef } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import Weather from './Park/Weather'


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
`

const ModalWrapper = styled.div`
    width: 1000px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 8px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const Modal = ({ showModal, setShowModal, name, park_code, weather }) => {
    const modalRef = useRef();
    
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = (event) => {
        if (modalRef.current === event.target) {
            setShowModal(false);
        }
    }
 
    return (
        <>
            {showModal && weather ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg src={`https://source.unsplash.com/600x500?/${name}`} alt={`${name}`} />
                            <ModalContent>
                                <h1>{name}</h1>
                                <p>{park_code}</p>
                                <Weather weather={weather}/>
                            </ModalContent>
                            <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>    
    )
}