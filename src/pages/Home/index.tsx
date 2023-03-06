import { Intro } from './components/Intro'
import { OurCoffee } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffee />
    </HomeContainer>
  )
}
