import { injectGlobal } from 'styled-components'
import { fontFamily } from './style'
import resetStyle from './resetStyle'

export default () => injectGlobal`
  ${resetStyle}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
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
