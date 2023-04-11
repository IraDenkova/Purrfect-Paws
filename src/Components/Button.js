import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: transparent;
  border-radius: 29px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.09em;
  color: #FFFFFF;
  cursor: pointer;
  border: none;
  overflow: hidden;
  position: relative;
  outline: none;
  padding: 16px 33px;
  z-index: 1;
  background-color: #E9A02D;
  
  &::after{
    content: "";
    position: absolute;
    top: -70px;
    left: -10px;
    width: 190px;
    height: 190px;
    background-color: #D3540F;
    border-radius: 50%;
    transform: scale(0.1);
    opacity: 0;
    z-index: -1;
    transition-delay: 0.3s;
    transition: transform 0.5s, opacity 0.3s, background-color 0.3s;
  }
  &:hover::after{
    opacity: 1;
    transform-origin: 100px 100px;
    transform: scale(1);
  }
  @media(max-width: 400px){
    padding: 14px 28px;
  }
`

const Button = ({text, onClick}) => {
  return (
    <Btn onClick={onClick}>
      {text}
    </Btn>
  )
}

export default Button
