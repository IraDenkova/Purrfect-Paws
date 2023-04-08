import React from 'react'
import styled from 'styled-components'

import vector4 from "../assets/vector-about-4.svg";
import vector5 from "../assets/vector-about-5.svg";
import cat3 from "../assets/cat-about-3.png";
import polygon from "../assets/polygon.svg";


const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #D3540F;
  border-radius: 50px;
  z-index: 11;
  position: relative;
  overflow: hidden;
   &::after{
    content: url(${polygon});
    position: absolute;
    top: 19px;
    left: 35px;
    transition: transform .4s ease-out;
  }
  &:hover::after {
    transform: scale(1.6) rotate(45deg);
  }
  &:not(:hover)::after {
    transform: scale(1) rotate(0);
  }
`
const ItemBox = styled.div`
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  background-color: #F6DEB0;
  text-align: start;
  justify-content: flex-start;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out; 
  img{
      transform: translateX(10%);
    }
  &:hover{
    opacity: 1;
    transition-delay: 0.2s; 
    img{
      transform: translateY(0%);
    }
  }
  &:not(:hover) {
    transition-delay: 0s; 
  }
`

const Text = styled.p`
  max-width: 100px;
  font-weight: 100;
  font-size: 28px;
  line-height: 33px;
`;

const Vector4 = styled.img`
  position: absolute;
  top: 20px;
  right: 50px;
   transition: all .3s .2s;
`
const Vector5 = styled.img`
  position: absolute;
  bottom: 20px;
  right: 90px;
   transition: all .3s .2s;
`
const CatImage3 = styled.img`
  position: absolute;
  bottom: 45px;
  right: 0;
   transition: all .3s .2s;
`


const ItemBoxOne = () => {
  return (
    <Wrapper>
      <ItemBox style={{  }}>
        <Text>
          Boosts energy and overall health
        </Text>
        <Vector4 src={vector4} />
        <Vector5 src={vector5} />
        <CatImage3 src={cat3} />
      </ItemBox>
    </Wrapper>
  )
}

export default ItemBoxOne