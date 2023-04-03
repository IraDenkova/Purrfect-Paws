import React from 'react'
import Logo from './Logo'
import Button from './Button'
import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/800.css"
import "@fontsource/archivo"
import styled from 'styled-components'
import CloseImage from '../assets/close.svg'

const Section = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #FBF9F4;
  z-index: 100;
  left: 0;
  top: 0;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #080808;
`
const Title = styled.h1`
  font-size: 90px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin-bottom: 90px;
  span{
    font-weight: 800;
  }
`
const Text = styled.p`
  letter-spacing: 0.01em;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  max-width: 140px;
  display: inline-block;
  font-family: "Archivo", sans-serif;
`
const Top = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 120px;
  margin-bottom: 90px;
`
const Form = styled.form`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  padding: 5px;
  width: 100%;
  max-width: 520px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #080808;
  margin-right: 43px;
`
const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  margin-right: 20px;
  padding-left: 25px;
  &::before{
    content: '';
    position: absolute;
    background-image:  url(${CloseImage});
    background-position: cover;
    width: 17px;
    height: 17px;
    left: 0;
    top: 0;
  }
`

const OrderNow = ({ show, onCloseClick }) => {
  return (
    <Section show={show}>
        <Top>
          <Logo />
          <CloseButton onClick={onCloseClick}>Close</CloseButton>
        </Top>
      <Container>
        <Title>
          ORDER <span>NOW </span>
          <Text> Write your e-mail
            address and we will consultat you.</Text>
        </Title>
        <Form>
          <Input
            type='email'
            placeholder='Email'
            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          <Button text='Order Now' />
        </Form>
      </Container>
    </Section>
  )
}

export default OrderNow
