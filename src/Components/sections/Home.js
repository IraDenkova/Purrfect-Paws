import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Navigation from '../Navigation'
import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/800.css"
import CatHome from '../CatHome'
import VectorOne from '../VectorOne'
import VectorTwo from '../VectorTwo'

const Section = styled.section`
  height: 100vh;
  background-color: #FBF9F4;
`
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  color: #080808;
`
const Title = styled.h1`
  font-size: 110px;
  margin-top: 40px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  max-width: 1000px;
  line-height: 115px;
  span{
    font-weight: 800;
  }
`
const Text = styled.p`
  letter-spacing: 0.01em;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  max-width: 220px;
  display: inline-block;
`
const draw = keyframes`
  from {
    stroke-dashoffset: 200%;
  }
  to {
    stroke-dashoffset: 0%;
  }
`
const VectorContainer = styled.div`
  position: absolute;
  svg path {
    stroke-dasharray: 100%;
    animation: ${draw} 3s ease-in forwards;
  }
`

const Home = () => {

  useEffect(() => {
    const vector1Path = document.getElementsByClassName('svg-path-1')[0]
    const vector2Path = document.getElementsByClassName('svg-path-2')[0]

    const length1 = vector1Path.getTotalLength();
    vector1Path.style.strokeDasharray = length1;
    vector1Path.style.strokeDashoffset = length1;

    const length2 = vector2Path.getTotalLength();
    vector2Path.style.strokeDasharray = length2;
    vector2Path.style.strokeDashoffset = length2;

  }, [])

    


  return (
    <Section>
      <Navigation />
      <Container>
        <Title>GIVE <Text>Made with only the freshest ingredients, our cat food is the purrrfect choice for pet owners :)</Text><br />YOUR FURRY FRIEND <span>THE BEST</span></Title>
        <CatHome />
        <VectorContainer style={{bottom: '20px', left: '60px'}}>
          <VectorOne />
        </VectorContainer>
        <VectorContainer style={{ top: '180px', right: '310px' }}>
          <VectorTwo />
        </VectorContainer>
        
      </Container>
    </Section>
  )
}

export default Home
