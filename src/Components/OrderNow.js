import React from 'react'
import Logo from './Logo'
import Button from './Button'

const Section = styled.section`
  
`

const OrderNow = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Logo />
          <CloseButton />
        </Top>
        <Title>
          ORDER NOW 
          <Text> Write your e-mail
            address and we will consultat you.</Text>
        </Title>
        <Form>
          <Input>
          
          </Input>
          <Button text='Order Now'/>
        </Form>
      </Container>
    </Section>
  )
}

export default OrderNow
