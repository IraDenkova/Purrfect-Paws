import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bg from "../../assets/footer-bg.png";
import Logo from '../Logo';

import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import YouTube from '../../assets/YouTube.png'

const Section = styled.section`
  backgroung-color: #FBF9F4;
  position: relative;
`
const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
`
const Background = styled.img`
  position: absolute;
  width: 100vw;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: 230px;
`
const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 7px 0;
  z-index: 1;
`
const Copyright = styled.p`
  text-align: center;
  z-index: 1;
`
const LinkItem = styled.img`
    transition: all .2s;
    &:hover{
      transform: scale(1.2);
    }
`

const Footer = () => {

  const logoRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        start: 'top top+=500',
        end: 'bottom center',
      }
    });

    tl.fromTo(logoRef.current, 
      {
        scale: 0, 
      },
      {
        scale: 1,
        duration: 1,
        ease: 'ease', 
      })
  }, []);

  return (
    <Section>
      <Background src={bg} />
      <Container>
        <div ref={logoRef}>
          <Logo />
        </div>
        <Links>
          <a href="https://www.facebook.com" target={'_blank'} rel="noreferrer">
            <LinkItem src={Facebook} />
          </a>
          <a href="https://www.instagram.com" target={'_blank'} rel="noreferrer">
            <LinkItem src={Instagram} />
          </a>
          <a href="https://www.twitter.com" target={'_blank'} rel="noreferrer">
            <LinkItem src={Twitter} />
          </a>
          <a href="https://www.youtube.com" target={'_blank'} rel="noreferrer">
            <LinkItem src={YouTube} />
          </a>
        </Links>
        <Copyright>
          &copy; {new Date().getFullYear()} Purrrfect Paws. All rights reserved.
        </Copyright>
      </Container>
    </Section>
  )
}

export default Footer
