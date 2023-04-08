import React from 'react'
import styled, { keyframes } from 'styled-components'
import vector1 from "../assets/vector-about-1.svg";


const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #E9A02D;
  border-radius: 50px;
  z-index: 11;
  position: relative;
  overflow: hidden;
  &::after{
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: #D3540F;
    border-radius: 50%;
    top: 25px;
    left: 25px;
    transition: transform .4s ease-out;
  }
  &:hover::after {
    transform: scale(1.6);
  }
  &:not(:hover)::after {
    transform: scale(1);
  }
`


const ItemBox = styled.div`
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-weight: 100;
  font-size: 28px;
  line-height: 33px;
  padding: 25px;
  text-align: center;
  position: relative;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out; 
  &:hover {
    opacity: 1;
    transition-delay: 0.2s; 
    img{
      transform: scale(1);
    }
  }
  &:not(:hover) {
    transition-delay: 0s; 
  }
`

const Text = styled.p`
  max-width: 100px;
`

const Vector1 = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  transform: scale(0.8);
  transition: transform 0.3s ease-out; 
`;


const ItemBoxOne = () => {

  return (
    <Wrapper>
      <ItemBox style={{ backgroundColor: '#D3540F', color: '#fff' }}>
        <Text>
          Supports healthy digestion
        </Text>
        <Vector1 src={vector1} />
      </ItemBox>
    </Wrapper>
  )
}

export default ItemBoxOne