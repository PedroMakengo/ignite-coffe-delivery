import { useCart } from '../../hooks/useCart'
import { Intro } from './components/Intro'
import { OurCoffee } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  const { cartItems } = useCart()
  return (
    <HomeContainer>
      <Intro />
      <OurCoffee />
    </HomeContainer>
  )
}
