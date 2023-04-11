import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import catImageRight from "../../assets/cat-about-right.png";
import catImageLeft from "../../assets/cat-about-left.png";
import bg from "../../assets/about-bg.png";

import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/800.css"
import "@fontsource/archivo/200.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
  padding: 50px 0;
`
const Background = styled.img`
  position: absolute;
  width: 100vw;
  z-index: 0;
  transform: translateY(-14%);
  @media(max-width: 400px){
    object-fit: cover;
    transform: translateY(-28%);
  }
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto 160px;
  color: #080808;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media(max-width: 400px){
    width: 90%;
    margin: 0 auto 110px;
  }
`
const Title = styled.h1`
  font-size: 80px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin-bottom: 40px;
  span{
     font-weight: 800;
  }
  @media(max-width: 400px){
    font-size: 47px;
    text-align: center;
  }
`
const toRight = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(0deg) scale(1);
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translate(12px, 18px) rotate(-60deg) scale(1);
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  51.6667%, 98.3333% {
    transform: translate(12px, 18px) rotate(-60deg) scale(1);
    opacity: 0;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate(12px, 18px) rotate(0deg) scale(1);
    opacity: 0;
  }
`
const toLeft = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(0deg) scale(1);
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate(12px, 18px) rotate(-60deg) scale(1);
    opacity: 1;
  }
`
const CatContainer = styled.div`
  
`
const CatImageRight = styled.img`
  top: 40px;
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 390px;
  max-height: 345px;
  z-index: 10;
  opacity: 1;
  animation: ${toRight} 6s ease-in-out infinite;
  @media(max-width: 400px){
    top: 0;
    width: 295px;
    height: 250px;
  }
`
const CatImageLeft = styled.img`
  top: 40px;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 9;
  max-height: 345px;
  max-width: 390px;
  animation: ${toLeft} 3s ease-in-out infinite alternate;
  @media(max-width: 400px){
    top: 0;
    width: 295px;
    height: 250px;
  }
`
const TextWrapper = styled.div`
  max-width: 510px;
  @media(max-width: 400px){
    padding-top: 325px;
  }
`
const Text = styled.div`
  max-width: 510px;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.01em;
  p + p {
    margin-top: 25px;
  }
`

const About = () => {

  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      1.5,
      { opacity: 0, },
      { opacity: 1, ease: 'Power1.easeOut', delay: 0.2 }
    );

    ScrollTrigger.create({
      trigger: titleRef.current,
      animation: tl,
      start: 'top 80%',
      end: 'bottom 20%',
    });
    return () => {
      tl.kill();
    };

  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      1,
      { opacity: 0, y: '15%' },
      { opacity: 1, y: '0%', delay: 0.3}
    );

    ScrollTrigger.create({
      trigger: textRef.current,
      animation: tl,
      start: 'top 80%',
      end: 'bottom 20%',
    });
    return () => {
      tl.kill();
    };

  }, []);

  return (
    <Section>
      <Background src={bg} />
      <Container>
        <CatContainer>
          <CatImageRight src={catImageRight} />
          <CatImageLeft src={catImageLeft} />
        </CatContainer>
        <TextWrapper>
          <Title ref={titleRef}>ABOUT <span>US</span></Title>
          <Text ref={textRef}>
            <p>
              Looking for a high-quality, nutritious and delicious cat food? Look no further than our brand :)
            </p>
            <p>
              "Purrfect Paws" is a company that specializes in creating high-quality, nutritious cat food for feline friends. Our team of animal nutrition experts and veterinarians carefully selects the best ingredients, including premium meats, whole grains, and essential vitamins and minerals.
            </p>
            <p>
              Our cat food is made with love and care, using only the finest, high-quality ingredients to provide your feline friend with a balanced and nutritious diet. We believe that cats deserve the best, which is why we never use fillers or additives that could be harmful to their health.
            </p>
          </Text>
        </TextWrapper>
      </Container>
      
    </Section>
  )
}

export default About
