import React from 'react'
import styled from 'styled-components'

const iconMap = preval`
  const fs = require('fs')
  const path = require('path')

  const iconPath = path.resolve('public/static/icons')
  const icons = fs.readdirSync(iconPath)

  module.exports = icons
    .reduce((acc, file) => {
      const content = fs.readFileSync(path.join(iconPath, file), 'utf8')

      acc[file.slice(0, -4)] = {
        path: /d="(.*?)"/.exec(content)[1],
        viewBox: /viewBox="(.*?)"/.exec(content)[1],
      }
      return acc
    }, {})
`

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

