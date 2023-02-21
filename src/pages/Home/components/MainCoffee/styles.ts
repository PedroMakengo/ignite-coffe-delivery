import styled from 'styled-components'

export const Main = styled.main`
  margin-bottom: 6rem;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 75%;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    margin-bottom: 3.3rem;
  }
`

export const ListCoffee = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  row-gap: 2.5rem;
`

export const Coffee = styled.article`
  width: 100%;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;

  position: relative;

  img {
    position: absolute;
    top: -20px;
  }
`
export const ContentTypeCoffee = styled.div`
  display: flex;
  margin-top: 6.3rem;
  gap: 0.875rem;
  align-items: center;

  margin-bottom: 1rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    padding: 4px 8px;
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
  }
`

export const ContextCoffee = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-block: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-label']};
  }
`

export const ButtonsContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonCheckout = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  width: 38px;
  height: 38px;
  border-radius: 6px;
  border: 0;

  svg {
    color: ${(props) => props.theme['white']};
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  span {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.1rem;

    small {
      font-size: 0.8rem;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`
