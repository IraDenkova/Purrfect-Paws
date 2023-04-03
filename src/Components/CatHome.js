import React from 'react'
import styled, { keyframes } from 'styled-components'
import catImg from "../assets/cat-home.png";

const moveEyes = keyframes`
  from {
    transform: translate(-20%, -50%);
  }
  to {
    transform: translate(20%, -50%);
  }
`
const CatContainer = styled.div`
  position: relative;
  top: -251px;
  right: -735px;
`
const Eye = styled.div`
  position: absolute;
  top: 42%;
  left: 8%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  transform: translate(-50%, -50%);
  animation: ${moveEyes} 2s ease-in-out infinite alternate;
`

const EyeCircle =styled.div`
  position: absolute;
  top: 74%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  animation: ${moveEyes} 2s ease-in-out infinite alternate;
`

const CatHome = () => {
  return (
    <CatContainer>
      <img src={catImg} alt="cat" />
      <EyeCircle style={{ left: '10%' }}>
        <Eye />
      </EyeCircle>
      <EyeCircle style={{ left: '6%' }}>
        <Eye />
      </EyeCircle>
    </CatContainer>
  );
};
export default CatHome
