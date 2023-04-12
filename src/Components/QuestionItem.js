import React, { useState } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background-color: #FBF9F4;
  color: #9FA672;
  font-weight: 700;
  font-size: 18px;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  border-bottom-left-radius: ${props => props.isOpen ? '0px' : '33px'};
  border-bottom-right-radius: ${props => props.isOpen ? '0px' : '33px'};
  padding: 24px 16px 24px 30px;
  margin-bottom: ${props => props.isOpen ? '0px' : '20px'};
  cursor: pointer;
  position: relative;
  &::after{
    content: '+';
    font-size: 45px;
    font-weight: 500;
    position: absolute;
    right: 20px;
    top: 6px;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
  @media(max-width: 400px){
    font-size: 14px;
    padding: 20px 16px 20px 20px;
    &::after{
    font-size: 36px;
    right: 15px;
  }
}
`
const Dropdown = styled.div`
  background-color: #FBF9F4;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  color: #080808;
  padding: 10px 30px 20px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: hidden;
  margin-bottom: 27px;
  @media(max-width: 400px){
    font-size: 12px;
    padding: 10px 20px 20px;
    margin-bottom: 20px;
  }
`


const QuestionItem = ({question, answer}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Item isOpen={isOpen} onClick={toggleDropdown}>
        {question}
      </Item>
      <Dropdown isOpen={isOpen}>
        {answer}
      </Dropdown>
    </>
  )
}

export default QuestionItem
