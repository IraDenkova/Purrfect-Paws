import React from 'react'
import styled from 'styled-components'
import "@fontsource/archivo/100.css"
import ItemBoxOne from '../ItemBoxOne'
import ItemBoxTwo from '../ItemBoxTwo'
import ItemBoxThree from '../ItemBoxThree'

const Container = styled.div`
  width: 73%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 400px) {
    width: 90%;
    flex-direction: column;
    position: relative;
    div + div{
      margin-top: 40px;
    }
    &::before{
      content: '*tap the figures';
      position: absolute;
      font-size: 14px;
      opacity: 0.6;
      top: -45px;
      left: 0;
    }
  }
`

const Advantages = () => {
  return (
    <Container>
      <ItemBoxOne />
      <ItemBoxTwo />
      <ItemBoxThree />
    </Container>
  )
}

export default Advantages