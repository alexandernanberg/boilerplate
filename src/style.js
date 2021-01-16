import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 620,
}

export const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

export const colors = {
  gray900: '#212121',
  gray800: '#424242',
  gray700: '#616161',
  gray600: '#757575',
  gray500: '#808080',
  gray400: '#bdbdbd',
  gray300: '#e0e0e0',
  gray200: '#f5f5f5',
  gray100: '#fcf8f6',
  red500: '#fb371b',
  blue500: '#2196f3',
}

export const sizes = [
  '0.8rem',
  '1.2rem',
  '1.6rem',
  '2.4rem',
  '3.2rem',
  '4.8rem',
  '5.6rem',
  '6.4rem',
]

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${fontFamily};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
  }

  ::selection {
    color: white;
    background-color: black;
  }
`
