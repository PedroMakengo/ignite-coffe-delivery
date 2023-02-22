import styled from 'styled-components'

export const Aside = styled.div`
  h2 {
    font-size: 1.12rem;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }
`

export const CheckoutListCoffee = styled.div`
  width: 100%;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  margin-top: 0.93rem;

  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const CoffeeConfirmed = styled.div`
  padding-top: 24px;
  border-top: 1px solid ${(props) => props.theme['base-button']};

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    li {
      display: flex;
      justify-content: space-between;

      span {
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }

      strong {
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 700;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const ContentCoffee = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr 55px;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`

export const ButtonsIncrement = styled.div`
  display: flex;
  margin-left: 1.5rem;
  margin-right: 3.1rem;
  gap: 0.5rem;
  width: 80%;

  flex-direction: column;
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;

  background: ${(props) => props.theme['base-button']};
  border: 0;
  padding: 0px 8px;

  color: ${(props) => props.theme['base-text']};
  border-radius: 8px;

  text-transform: uppercase;
`

export const ButtonConfirmed = styled.button`
  border-radius: 6px;
  padding: 12px 8px;
  height: 46px;
  border: 0;

  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};

  text-transform: uppercase;
  font-weight: 700;

  font-size: 0.875rem;
`
