import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pawImage from '../assets/catpaw-one.png'
import styled from 'styled-components';

const Paw = styled.img`
  position: absolute;
  right: -30px;
  top: 150px;
  @media(max-width: 400px){
    display: none;
  }
`

const CatPawOne = () => {

  const pawRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pawRef.current,
        start: 'top center',
        end: 'bottom center',
      },
    });

    // Add a rotation to the paw
    tl.to(pawRef.current, {
      rotation: -10,
      duration: 0.3,
      ease: 'ease-in-out',
    });

    // Move the paw across the screen
    tl.to(
      pawRef.current,
      {
        x: '110%',
        ease: 'bounce',
        duration: 1,
      }
    );

    // Simulate the paw opening and closing
    tl.to(pawRef.current, {
      rotation: 10,
      duration: 0.3,
      ease: 'ease-in-out',
    });
    tl.to(pawRef.current, {
      rotation: 0,
      duration: 0.3,
      ease: 'ease-in-out',
    });
    tl.to(
      pawRef.current,
      {
        x: '0%',
        ease: 'ease-in-out',
        duration: 1,
      }
    );
  }, []);

  return (
    <div>
      <Paw ref={pawRef} src={pawImage} />
    </div>
  )
}

export default CatPawOne