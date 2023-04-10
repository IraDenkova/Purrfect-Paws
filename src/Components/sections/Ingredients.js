import React from 'react'
import styled from 'styled-components'

import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/800.css"
import IngredientItem from '../IngredientItem'

import vector from '../../assets/vector-ingredients.svg'
import steps from '../../assets/steps.png'


const Section = styled.section`
  padding: 220px 0 150px; 
  background-image: url(${steps});
  background-repeat: no-repeat;
  background-size: contain;
`
const Box = styled.div`
  width: 55%;
  margin: 0 auto;
  background-color: #FBF9F4;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 70px 50px 20px 50px;
`
const Title = styled.h1`
  font-size: 70px;
  line-height: 74px;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 0 auto 60px;
  text-align: center;
  span{
    font-weight: 800;
    position: relative;
    &::before{
      content: url(${vector});
      position: absolute;
      top: -26px;
      left: -24px;
    }
  }
`

const Ingredients = () => {
  
  

  return (
    <Section>
      <Box>
        <Title><span>BEST</span> INGREDIENTS </Title>
        <div>
          <IngredientItem number='1' bold='High-quality protein sources:' text='chicken, turkey, beef, fish, or lamb, as the first ingredient.' />
          <IngredientItem number='2' bold='Essential fatty acids:' text='fish oil or flaxseed.' />
          <IngredientItem number='3' bold='Natural ingredients:' text='fruits and vegetables.' />
          <IngredientItem number='4' bold='Vitamins and minerals:' text='vitamin A, vitamin D, vitamin E, taurine, and calcium.' />
          <IngredientItem number='5' bold='Probiotics:' text='lactobacillus acidophilus or bifidobacterium animalis.' />
        </div>
      </Box>
    </Section>
  )
}

export default Ingredients
