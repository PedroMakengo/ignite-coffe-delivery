import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { OurCoffeeContainer, CoffeeList } from './styles'

export function OurCoffee() {
  return (
    <OurCoffeeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeeContainer>
  )
}
