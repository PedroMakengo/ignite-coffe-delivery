import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  height: 6.5rem;
`
export const Content = styled.header`
  width: 75%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;

      text-decoration: none;
      padding: 8px;
      cursor: pointer;
    }
  }
`

export const ButtonCheckout = styled(NavLink)`
  width: 2.37rem;
  height: 2.37rem;
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  sup {
    position: absolute;
    right: -8px;
    top: -8px;

    background: ${(props) => props.theme['yellow']};
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 9999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 130%;

    color: ${(props) => props.theme['white']};
  }
`

export const ButtonCity = styled(NavLink)`
  width: 9.93rem;
  background: ${(props) => props.theme['purple-light']};

  font-size: 0.875rem;
  gap: 0.3rem;
`
