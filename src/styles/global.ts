import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['base-card']}
  }
 
  body {
    /* font-family: 'Baloo 2', cursive; */
    background: ${(props) => props.theme['white']} ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ul {
    list-style:none;
    padding: 0;
    margin: 0;
  }
`
