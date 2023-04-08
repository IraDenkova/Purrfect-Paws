import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { TweenMax } from 'gsap'

import Navigation from '../Navigation'
import CatHome from '../CatHome'
import VectorOne from '../VectorOne'
import VectorTwo from '../VectorTwo'

import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/800.css"
import "@fontsource/archivo"


const Section = styled.section`
  height: 100vh;
  padding-top: 130px;
  background-color: #FBF9F4;
`
const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  color: #080808;
`
const Title = styled.h1`
  font-size: 110px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  max-width: 1000px;
  line-height: 120px;
`
const TitleBold = styled.h1`
  font-size: 110px;
  font-family: "Raleway", sans-serif;
  line-height: 120px;
  font-weight: 800;
`
const Text = styled.p`
  position: absolute;
  right: 274px;
  top: 189px;
  letter-spacing: 0.01em;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  max-width: 200px;
  font-family: "Archivo", sans-serif;
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
  z-index: 10;
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

  const titleRef = useRef(null)
  const titleBoldRef = useRef(null)
  const section = useRef(null)

  useEffect(() => {
    TweenMax.fromTo(
      titleRef.current,
      1,
      { opacity: 0, x: '-10%'  },
      { opacity: 1, x: '0%', delay: 0.8 }
    );
    TweenMax.fromTo(
      titleBoldRef.current,
      1.3,
      { opacity: 0, },
      { opacity: 1, delay: 1.3, ease: 'back.out(1.7)' }
    );
    TweenMax.fromTo(
      section.current,
      1,
      { opacity: 0 },
      { opacity: 1 }
    );
    return () => {
      TweenMax.killTweensOf();
    };
  }, []);

  
  return (
    <Section ref={section}>
      <Navigation />
      <Container>
        <Title ref={titleRef} >GIVE YOUR FURRY FRIEND </Title>
        <TitleBold ref={titleBoldRef}>THE BEST</TitleBold>
        <Text>Made with only the freshest ingredients, our cat food is the purrrfect choice for pet owners :)</Text>
        <CatHome />
        <VectorContainer style={{ bottom: '90px', left: '30px', transform: 'rotate(90deg)' }}>
          <VectorOne />
        </VectorContainer>
        <VectorContainer style={{ bottom: '-90px', right: '120px' }}>
          <VectorTwo />
        </VectorContainer>
      </Container>
    </Section>
  )
}

export default Home
