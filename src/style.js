import { css, injectGlobal } from 'styled-components'
import { reset } from 'styled-reset'

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 620,
}

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const injectGlobalStyle = () => injectGlobal`
  ${reset} /* stylelint-disable-line */

  :root {
    /* Font */
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Colors */
    --gray900: #212121;
    --gray800: #424242;
    --gray700: #616161;
    --gray600: #757575;
    --gray500: #808080;
    --gray400: #bdbdbd;
    --gray300: #e0e0e0;
    --gray200: #f5f5f5;
    --gray100: #fcf8f6;
    --red500: #fb371b;
    --blue500: #2196f3;

    /* Easings */
    --ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

    /* Sizes */
    --size-1: 0.8rem;
    --size-2: 1.2rem;
    --size-3: 1.6rem;
    --size-4: 2.4rem;
    --size-5: 3.2rem;
    --size-6: 4.8rem;
    --size-7: 5.6rem;
    --size-8: 6.4rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: var(--font-family);
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
