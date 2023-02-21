import { ShoppingCart } from 'phosphor-react'

import {
  Main,
  Container,
  ListCoffee,
  Coffee,
  ContentTypeCoffee,
  ButtonsContainerInput,
  ButtonCheckout,
  ContextCoffee,
  Buttons,
} from './styles'

import coffeeImg01 from '../../../../assets/coffee01.svg'
import { IncrementAndDecrement } from '../../../../components/IncrementAndDecrement'

const coffees = [1, 2, 3, 4, 5, 6, 1, 1, 1, 2, 5, 6, 8, 1, 19, 2, 5]
export function MainCoffee() {
  return (
    <Main>
      <Container>
        <h2>Nossos Cafés</h2>

        <ListCoffee>
          {coffees.map((coffee, index) => (
            <Coffee>
              <img src={coffeeImg01} alt="" />
              <ContentTypeCoffee>
                <span>Tradicional</span>
              </ContentTypeCoffee>
              <ContextCoffee>
                <h3>Expresso</h3>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </ContextCoffee>
              <Buttons>
                <span>
                  <small>R$</small>
                  <strong>99</strong>
                </span>
                <ButtonsContainerInput>
                  <IncrementAndDecrement />
                  <ButtonCheckout>
                    <ShoppingCart size={18} weight="fill" />
                  </ButtonCheckout>
                </ButtonsContainerInput>
              </Buttons>
            </Coffee>
          ))}
        </ListCoffee>
      </Container>
    </Main>
  )
}
