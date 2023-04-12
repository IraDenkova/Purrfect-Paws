import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import OrderNow from './OrderNow'

const Section = styled.div`
  width: 100vw;
  background-color: #FBF9F4;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`
const NavBar = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 85px;
  @media(max-width: 400px) {
    width: 90%;
    height: 75px;
  }
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media(max-width: 400px){
    display: none;
  }
`
const MenuItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #080808;
  cursor: pointer;
  margin: 0 40px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    background-color: #080808;
    width: 100%;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  &:hover::before{
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
`

const Navigation = () => {

  const [showStickyWindow, setShowStickyWindow] = useState(false);
  const handleButtonClick = () => setShowStickyWindow(true);
  const handleCloseClick = () => setShowStickyWindow(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo('about')}>About Us</MenuItem>
          <MenuItem onClick={() => scrollTo('ingredients')}>Ingredients</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </Menu>
        <Button onClick={handleButtonClick} text='Order now' />
        <OrderNow show={showStickyWindow} onCloseClick={handleCloseClick} />
      </NavBar>
    </Section>
  )
}

export default Navigation
