import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  h2 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Header = styled.div`
  display: flex;
  gap: 8px;
`

export const HeaderDescribe = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Form = styled.form`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};

    &:first-child {
      width: 200px;
    }

    &::placeholder {
    }
  }
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0.75rem;
`

export const GroupInputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;

  label {
    padding-right: 0.75rem;
    font-size: 12px;
    color: ${(props) => props.theme['base-label']};
  }

  input {
    border: 0;
    border-radius: 0;
  }
`

export const InputGroupFooter = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 200px 1fr 60px;
`

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

export const Payment = styled(BaseContentPayment)``

export const HeaderPayment = styled.div`
  display: flex;
  gap: 0.7rem;
`

export const ContentPayment = styled.div`
  strong {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const BodyPayment = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  button {
    font-size: 12px;
    font-weight: 400;
    padding: 1rem 0.5rem;

    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};

    border: 0;
    border-radius: 6px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
`
