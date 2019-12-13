import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-family: Montserrat, sans-serif;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textColor};
  }

  #root {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    height: 100%;
  }
`

export default GlobalStyle
