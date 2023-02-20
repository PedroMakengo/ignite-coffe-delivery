import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import {
  Background,
  Container,
  Content,
  Photo,
  ContentHeader,
  BorderYellowDark,
  BorderYellowLight,
  BorderGray,
  BorderPurple,
} from './styles'

import coffeeImg from '../../../../assets/coffee.svg'
export function Banner() {
  return (
    <Background>
      <Container>
        <Content>
          <ContentHeader>
            <h1>Encontre o café perfeito para qualquer hora do dia </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </ContentHeader>
          <ul>
            <li>
              <BorderYellowDark>
                <ShoppingCart size={16} color="#fff" weight="fill" />
              </BorderYellowDark>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <BorderGray>
                <Package size={16} color="#fff" weight="fill" />
              </BorderGray>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <BorderYellowLight>
                <Timer size={16} color="#fff" weight="fill" />
              </BorderYellowLight>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <BorderPurple>
                <Coffee size={16} color="#fff" weight="fill" />
              </BorderPurple>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </Content>
        <Photo>
          <img src={coffeeImg} />
        </Photo>
      </Container>
    </Background>
  )
}
