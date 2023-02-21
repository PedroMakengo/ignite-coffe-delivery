import { Header, Container, Content, FormContent, Paymant } from './styles'
import { MapPinLine } from 'phosphor-react'

export function FormCheckout() {
  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <Content>
        <FormContent>
          <Header className="header">
            <MapPinLine />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Header>
        </FormContent>
        <Paymant>
          <h2>Pagamento</h2>
        </Paymant>
      </Content>
    </Container>
  )
}
