import React from 'react'
import styled from 'styled-components'
import "@fontsource/archivo/100.css"
import ItemBoxOne from './ItemBoxOne'
import ItemBoxTwo from './ItemBoxTwo'
import ItemBoxThree from './ItemBoxThree'

const Container = styled.div`
  width: 73%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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