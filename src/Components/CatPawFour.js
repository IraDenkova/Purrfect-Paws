import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pawImage from '../assets/catpaw-four.png'
import styled from 'styled-components';

const Paw = styled.img`
  position: absolute;
  left: 0;
  bottom: 160px;
  @media(max-width: 400px){
    display: none;
  }
`

const CatPawFour = () => {

  const pawRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pawRef.current,
        start: "top center",
        end: "bottom center",
      },
    });

    tl.fromTo(
      pawRef.current,
      {
        x: "-100%",
      },
      {
        x: "-2%",
        ease: "ease-in-out",
        duration: 3,
      }
    );
  }, []);

  return (
    <div>
      <Paw ref={pawRef} src={pawImage} />
    </div>
  )
}

export default CatPawFour