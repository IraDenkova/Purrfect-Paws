import React from 'react'
import styled from 'styled-components'

import "@fontsource/raleway"
import "@fontsource/raleway/800.css"
import QuestionItem from '../QuestionItem'
import CatPawOne from '../CatPawOne'
import CatPawTwo from '../CatPawTwo'
import CatPawThree from '../CatPawThree'
import CatPawFour from '../CatPawFour'

const Section = styled.section`
  height: auto;
  padding-top: 120px;
  padding-bottom: 240px ;
  background-color: #9FA672;
  position: relative;
  @media(max-width: 400px){
    padding: 50px 0 120px;
  }
`
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #080808;
  @media(max-width: 400px){
    width: 90%;
  }
`
const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-weight: 800;
  font-size: 80px;
  line-height: 80px;
  color: #FBF9F4;
  margin-bottom: 70px;
  @media(max-width: 400px){
    font-size: 47px;
    line-height: 54px;
    margin-bottom: 50px;
  }
`

const Faq = () => {
  return (
    <Section id='faq'>
      <CatPawOne />
      <CatPawTwo />
      <CatPawThree />
      <CatPawFour />
      <Container>
        <Title>FAQ</Title>
        <div>
          <QuestionItem
            question='What kind of food is best for my cat?'
            answer="Cat owners often wonder what type of food is best for their cat, whether it's wet, dry or a mix of both. The answer depends on the cat's individual needs and preferences, as well as any health concerns they may have. A veterinarian can help provide guidance on the best diet for your cat." />
          <QuestionItem
            question='How much should I feed my cat?'
            answer="Feeding instructions on cat food labels are typically based on the cat's weight, age, and activity level. However, it's important to monitor your cat's weight and adjust their portion sizes accordingly to ensure they maintain a healthy weight." />
          <QuestionItem
            question='Can I feed my cat human food?'
            answer="While it's tempting to share your food with your cat, some human foods can be harmful to cats. For example, chocolate, onions, and garlic can be toxic to cats. It's best to stick to cat-specific food and treats to ensure your cat is getting the nutrition they need." />
          <QuestionItem
            question='Is grain-free cat food necessary?'
            answer="Grain-free cat food has become popular in recent years, but it's not necessary for all cats. Some cats may have grain sensitivities or allergies, but most cats can digest grains without issue. It's important to focus on the overall quality and balance of the cat food rather than just the absence of grains." />
        </div>
      </Container>
    </Section>
  )
}

export default Faq
