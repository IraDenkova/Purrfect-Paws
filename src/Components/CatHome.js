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
  background-image: url(${catImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 367px;
  height: 281px;
  top: -290px;
  right: -550px;
  @media(max-width: 400px){
    top: -40px;
    right: -20px;
    width: 297px;
    height: 210px;
    margin: 0 0 0 auto;
  }
`
const Eye = styled.img`
  position: absolute;
  top: 40px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 50;
  animation: ${moveEyes} 1.3s linear infinite alternate;
  @media(max-width: 400px){
    width: 9px;
    height: 11px;
    top: 33px;
  }
`

const EyeCircle = styled.img`
  position: absolute;
  top: 40px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  z-index: 45;
  animation: ${moveCircles} 1.3s linear infinite alternate;
  @media(max-width: 400px){
    width: 16px;
    height: 16px;
    top: 33px;
  }
`
const Tail = styled.img`
  position: absolute;
  top: 80%;
  left: 0%;
  animation: ${moveTail} 2.5s ease-in-out infinite alternate;
  @media(max-width: 400px){
    width: 100px;
    height: 100px;
  }
`
const Nose = styled.img`
  position: absolute;
  top: 64px;
  right: 90px;
  animation: ${moveEyes} 1.3s linear infinite alternate;
  @media(max-width: 400px){
    top: 54px;
    width: 12px;
    height: 10px;
  }
`

const CatHome = () => {
  return (
    <CatContainer>
      <Tail src={catTail} />
      <EyeCircle src={catCircle} style={{ right: '97px' }} />
      <Eye src={catEye} style={{ right: '105px' }} />
      <EyeCircle src={catCircle} style={{ right: '72px' }} />
      <Eye src={catEye} style={{ right: '80px' }} />
      <Nose src={catNose} />
    </CatContainer>
  );
};
export default CatHome
