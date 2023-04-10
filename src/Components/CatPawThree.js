import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pawImage from '../assets/catpaw-three.png'
import styled from 'styled-components';

const Paw = styled.img`
  position: absolute;
  right: -20px;
  bottom: 200px;
`

const CatPawThree = () => {

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

    tl.to(
      pawRef.current,
      {
        x: '40%',
        ease: 'ease-in',
        duration: 1,
      }
    );

    tl.to(pawRef.current, {
      rotation: 5,
      duration: 0.3,
      ease: 'ease-in-out',
    });
    tl.to(pawRef.current, {
      rotation: -5,
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

export default CatPawThree