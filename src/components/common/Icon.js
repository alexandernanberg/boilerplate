import React from 'react'
import styled from 'styled-components'
import iconMap from '../../utils/iconMap'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: text-top;
  width: 1em;
  height: 1em;
  fill: currentColor;
  pointer-events: none;
`

export default ({ name, ...rest }) => (
  <Svg viewBox={iconMap[name].viewBox} {...rest}>
    <path d={iconMap[name].path} />
  </Svg>
)

