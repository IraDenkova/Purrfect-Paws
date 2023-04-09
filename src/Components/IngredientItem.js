import React from 'react'
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
  return (
    <Item>
      <Number>{number}</Number>
      <span>{bold} </span>
      {text}
    </Item>
  )
}

export default IngredientItem
