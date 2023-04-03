import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import OrderNow from './OrderNow'

const Section = styled.div`
  width: 100vw;
  background-color: #FBF9F4;
`
const NavBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 120px;
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
const MenuItem = styled.li`
  font-weight: 400;
  font-size: 16px;
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

  const [showOrderWindow, setShowOrderWindow] = useState(false);

  const handleOrderClick = (e) => {
    setShowOrderWindow(!e);
  };

  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Ingredients</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button onClick={handleOrderClick} text='Order now' />
        {showOrderWindow && <OrderNow />}
      </NavBar>
    </Section>
  )
}

export default Navigation
