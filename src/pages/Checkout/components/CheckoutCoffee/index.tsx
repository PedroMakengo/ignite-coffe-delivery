import { Trash } from 'phosphor-react'

import { IncrementAndDecrement } from '../../../../components/IncrementAndDecrement'
import {
  Aside,
  ButtonsIncrement,
  ContentCoffee,
  CheckoutListCoffee,
  Buttons,
  ButtonRemove,
  CoffeeConfirmed,
  ButtonConfirmed,
} from './styles'

import coffeeImg from '../../../../assets/coffee01.svg'

const coffees = [1, 2]

export function CheckoutCoffee() {
  return (
    <Aside>
      <h2>Cafés selecionados</h2>
      <CheckoutListCoffee>
        {coffees.map((coffee, index) => (
          <div>
            <ContentCoffee>
              <img src={coffeeImg} alt="" />
              <ButtonsIncrement>
                <strong>Expresso Tradicional</strong>
                <Buttons>
                  <IncrementAndDecrement />
                  <ButtonRemove>
                    <Trash size={18} color="#8047F8" weight="thin" /> Remover
                  </ButtonRemove>
                </Buttons>
              </ButtonsIncrement>
              <span>R$ 9,99</span>
            </ContentCoffee>
          </div>
        ))}
        <CoffeeConfirmed>
          <ul>
            <li>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </li>
          </ul>
        </CoffeeConfirmed>
        <ButtonConfirmed>Confirmar Pedido</ButtonConfirmed>
      </CheckoutListCoffee>
    </Aside>
  )
}
