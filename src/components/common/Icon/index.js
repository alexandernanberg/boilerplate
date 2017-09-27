import React from 'react'
import styled from 'styled-components'

const withMap = r => r.keys().reduce((acc, item) => {
  const { id } = r(item).default
  acc[id.match(/^[^-]*/)[0]] = id
  return acc
}, {})

const map = withMap(require.context('./glyphs', false, /.svg$/))

const Icon = styled.svg`
  display: inline-block;
  vertical-align: text-top;
  width: 1em;
  height: 1em;
  fill: currentColor;
  pointer-events: none;
`

export default ({ name, ...props }) => (
  <Icon {...props}>
    <use xlinkHref={`#${map[name]}`} />
  </Icon>
)
