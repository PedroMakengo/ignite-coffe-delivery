import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Content, Container, ButtonCheckout, ButtonCity } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <NavLink to="/home">
          <img src={logo} />
        </NavLink>
        <nav>
          <ButtonCity to="/home">
            <MapPin size={22} color="#8047F8" weight="fill" />
            Porto Alegre, SR
          </ButtonCity>
          <ButtonCheckout to="/checkout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
            <sup>0</sup>
          </ButtonCheckout>
        </nav>
      </Content>
    </Container>
  )
}
