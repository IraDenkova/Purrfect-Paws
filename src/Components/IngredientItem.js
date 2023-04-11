import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Item = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 27px 0;
  display: inline-block;
  span{
    font-weight: 600;
  }
  @media(max-width: 400px){
    font-size: 14px;
    line-height: 18px;
    padding: 15px 0;
  }
`
const Number = styled.p`
  display: inline;
  font-weight: 700;
  font-size: 60px;
  padding-right: 30px;
  @media(max-width: 400px){
    font-size: 44px;
    line-height: 48px;
    padding-right: 22px;
  }
`



const IngredientItem = ({number, bold, text}) => {

  const itemRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      itemRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <Item ref={itemRef}>
      <Number>{number}</Number>
      <span>{bold} </span>
      {text}
    </Item>
  )
}

export default IngredientItem
