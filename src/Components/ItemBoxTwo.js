import React from 'react'
import styled from 'styled-components'
import vector2 from "../assets/vector-about-2.svg";
import vector3 from "../assets/vector-about-3.svg";
import cat2 from "../assets/cat-about-2.png";

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #9FA672;
  border-radius: 50px;
  z-index: 11;
  position: relative;
  overflow: hidden;
  &::after{
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: #E9A02D;
    top: 50px;
    left: 50px;
    transition: transform .4s ease-out;
  }
  &:hover::after {
    transform: scale(1.6) rotate(0);
  }
  &:not(:hover)::after {
    transform: scale(1) rotate(45deg);
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
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out; 
  img{
      transform: translateY(-10%);
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
  max-width: 160px;
`

const Vector2 = styled.img`
  position: absolute;
  top: 0;
  left: 34px;
  transition: all .3s .2s;
`

const Vector3 = styled.img`
  position: absolute;
  top: 5px;
  right: 18px;
  transition: all .3s .2s;
`

const CatImage2 = styled.img`
  position: absolute;
  bottom: 6px;
  right: 15px;
  transition: all .3s .2s;
`

const ItemBoxTwo = () => {
  return (
    <Wrapper>
      <ItemBox style={{ backgroundColor: '#E9A02D', alignItems: 'start' }} >
        <Text>
          Promotes strong bones and muscles
        </Text>
        <Vector2 src={vector2} />
        <Vector3 src={vector3} />
        <CatImage2 src={cat2} />
      </ItemBox>
    </Wrapper>
  )
}

export default ItemBoxTwo