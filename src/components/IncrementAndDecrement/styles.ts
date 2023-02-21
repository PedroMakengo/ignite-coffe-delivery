import styled from 'styled-components'

export const ButtonIncrementAndDecrement = styled.div`
  padding: 0 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  button {
    border: 0;
    background: none;
    height: 38px;
    padding: 0 0.4rem;

    &:first-child,
    &:last-child {
      font-weight: bold;
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
