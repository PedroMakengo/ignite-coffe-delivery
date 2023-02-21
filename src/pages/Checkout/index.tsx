import { CheckoutCoffee } from './components/CheckoutCoffee'
import { FormCheckout } from './components/FormCheckout'
import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <FormCheckout />
      <CheckoutCoffee />
    </Container>
  )
}
