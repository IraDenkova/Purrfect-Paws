import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Item = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  padding: 27px 0;
  display: inline-block;
  span{
    font-weight: 600;
  }
`
const Number = styled.p`
  display: inline;
  font-weight: 700;
  font-size: 60px;
  padding-right: 30px;
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
