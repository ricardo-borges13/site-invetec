import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
  font-size: 16px;
  min-height: 100%;
}

  body {
  margin: 0;
  min-height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.colors.background.global};
  color: ${({ theme }) => theme.colors.fonts.global};
  overflow-x: hidden;
  }
`

