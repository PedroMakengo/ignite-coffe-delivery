import {
  Header,
  HeaderDescribe,
  Container,
  Content,
  FormContent,
  Payment,
  Form,
  InputGroup,
  GroupInputLabel,
  InputGroupFooter,
  HeaderPayment,
  ContentPayment,
  BodyPayment,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

export function FormCheckout() {
  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <Content>
        <FormContent>
          <Header>
            <MapPinLine size={22} color="#C47F17" />
            <HeaderDescribe>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </HeaderDescribe>
          </Header>

          <Form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <InputGroup>
              <input type="text" placeholder="Número" />
              <GroupInputLabel>
                <input type="text" id="complemento" placeholder="Complemento" />
                <label htmlFor="complemento">Opcional</label>
              </GroupInputLabel>
            </InputGroup>
            <InputGroupFooter>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </InputGroupFooter>
          </Form>
        </FormContent>
        <Payment>
          <HeaderPayment>
            <CurrencyDollar size={22} color="#8047F8" weight="thin" />
            <ContentPayment>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </ContentPayment>
          </HeaderPayment>

          <BodyPayment>
            <button>
              <CreditCard size={16} color="#8047F8" weight="thin" />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={16} color="#8047F8" weight="thin" />
              Cartão de Débito
            </button>
            <button>
              <Money size={16} color="#8047F8" weight="thin" />
              Dinheiro
            </button>
          </BodyPayment>
        </Payment>
      </Content>
    </Container>
  )
}
