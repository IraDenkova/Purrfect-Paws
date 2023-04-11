import React from 'react'
import "@fontsource/atma"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
  font-family: "Atma", cursive;
  font-weight: 400;
  font-size: 48px;
  color: #080808;
  position: relative;
  &::after,
  &::before{
    content: 'r';
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0;
  }
  &::after{
    right: -80px;
    transition: opacity .2s .1s;
  }
  &::before{
    right: -98px;
    transition: opacity .2s .3s;
  }
  &:hover::after,
  &:hover::before{
    opacity: 1;
  }
   @media(max-width: 400px) {
    font-size: 36px;
    &::after,
    &::before{
      display: none;
    }
  }
`

const Logo = () => {
  return (
    <LogoText>
      <Link to='/'>
        Purr
      </Link>
    </LogoText>
  )
}

export default Logo
