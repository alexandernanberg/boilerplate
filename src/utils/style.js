import { css } from 'styled-components'

export const colors = {
  gray900: '#101010',
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
  orange500: '#f07d43',
}

export const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 520,
}

export const media = Object.keys(breakpoints)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `
    return acc
  }, {})
