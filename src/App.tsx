import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Coffee, CoffeeContext } from './contexts/CoffeeContext'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <CoffeeContext value={{}}> */}
        <Router />
        {/* </CoffeeContext> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
