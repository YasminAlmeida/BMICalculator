import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;

  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 900px;
    margin: 40px auto;
  }
`

export default GlobalStyle
