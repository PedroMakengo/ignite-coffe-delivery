import { useTheme } from 'styled-components'
import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  BenefitsContainer,
} from './styles'

import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import introImg from '../../../../assets/coffee.svg'

export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <IntroTitle size="xl">
            Encontre o cáfe perfeito para qualquer hora do dia
          </IntroTitle>
          <RegularText size="l" color="subtitle" as="h3">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </RegularText>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  )
}