import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.93rem;
  border-radius: 6px;

  gap: 12px;
`

export const BaseContentPayment = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;
`

export const FormContent = styled(BaseContentPayment)``

export const Paymant = styled(BaseContentPayment)``
