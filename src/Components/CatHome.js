import React from 'react'
import styled, { keyframes } from 'styled-components'
import catImg from "../assets/cat-home.png";
import catTail from "../assets/cat-home-tail.svg";
import catEye from "../assets/cat-home-black-eye.svg";
import catCircle from "../assets/cat-home-white-eye.svg";
import catNose from "../assets/cat-home-nose.png";

const moveCircles = keyframes`
  from {
    transform: matrix(1,0,0,1,0,0);
  }
  to {
    transform: matrix(1,0,0,1,6,1);
  }
`
const moveEyes = keyframes`
  from {
    transform: matrix(1,0,0,1,0,0);
  }
  to {
    transform: matrix(1,0,0,1,10,1);
  }
`
const moveTail = keyframes`
  from {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(15deg);
  }
`
const CatContainer = styled.div`
  position: relative;
  top: -290px;
  right: -550px;
`
const Eye = styled.img`
  position: absolute;
  top: 40px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 50;
  animation: ${moveEyes} 1.3s linear infinite alternate;
`

const EyeCircle = styled.img`
  position: absolute;
  top: 40px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 45;
  animation: ${moveCircles} 1.3s linear infinite alternate;
`
const Tail = styled.img`
  position: absolute;
  top: 80%;
  left: 0%;
  animation: ${moveTail} 2.5s ease-in-out infinite alternate;
`
const Nose = styled.img`
  position: absolute;
  top: 64px;
  right: 593px;
  animation: ${moveEyes} 1.3s linear infinite alternate;
`

const CatHome = () => {
  return (
    <CatContainer>
      <img src={catImg} alt="cat" />
      <Tail src={catTail} />
      <EyeCircle src={catCircle} style={{ right: '68%' }} />
      <Eye src={catEye} style={{ right: '609px' }} />
      <EyeCircle src={catCircle} style={{ right: '65%' }} />
      <Eye src={catEye} style={{ right: '582px' }} />
      <Nose src={catNose} />
    </CatContainer>
  );
};
export default CatHome
