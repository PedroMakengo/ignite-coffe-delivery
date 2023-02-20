import styled from 'styled-components'

import BannerImg from '../../../../assets/banner.svg'

export const Background = styled.div`
  background-image: url(${BannerImg});
  background-size: cover;
  height: 70vh;
`
export const Container = styled.div`
  width: 75%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  gap: 1rem;
`
export const Content = styled.div`
  width: 60%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    margin-top: 4.12rem;
    list-style: none;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      div {
        width: 32px;
        height: 32px;

        border-radius: 9999px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export const BorderYellowDark = styled.div`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const BorderYellowLight = styled.div`
  background-color: ${(props) => props.theme['yellow']};
`

export const BorderGray = styled.div`
  background-color: ${(props) => props.theme['base-text']};
`

export const BorderPurple = styled.div`
  background-color: ${(props) => props.theme['purple']};
`

export const ContentHeader = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    margin-block: 1rem;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    width: 90%;
  }
`
export const Photo = styled.div`
  width: 40%;

  img {
    width: 100%;
  }
`
