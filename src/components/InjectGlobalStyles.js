import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { fontFamily, colors } from '../constants'

const injectStyles = () => injectGlobal`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: ${fontFamily};
    font-size: 10px;
    font-smoothing: antialiased;
    color: ${colors.gray900};
  }

  body {
    min-width: 320px;
    cursor: default;
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

export default () => {
  injectStyles()
  return null
}
