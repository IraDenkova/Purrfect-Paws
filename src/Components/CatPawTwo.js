import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pawImage from '../assets/catpaw-two.png'
import styled from 'styled-components';

const Paw = styled.img`
  position: absolute;
  left: -100px;
  top: 300px;
`

const CatPawTwo = () => {

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

    // Simulate the paw opening and closing
    tl.to(pawRef.current, {
      rotation: 10,
      duration: 0.4,
      ease: 'ease-in-out',
    });
    tl.to(pawRef.current, {
      rotation: 0,
      duration: 0.4,
      ease: 'ease-in-out',
    });
    // Move the paw across the screen
    tl.to(
      pawRef.current,
      {
        x: '49%',
        ease: 'ease-in-out',
        duration: 2,
      }
    );
  }, []);
 

  return (
    <div>
      <Paw ref={pawRef} src={pawImage} />
    </div>
  )
}

export default CatPawTwo