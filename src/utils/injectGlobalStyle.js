import { injectGlobal } from 'styled-components'
import { fontFamily } from './style'

const reset = preval`
  const fs = require('fs')
  module.exports = fs.readFileSync('node_modules/reset-css/reset.css', 'utf8')
`

export default () => injectGlobal`
  ${reset}

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
