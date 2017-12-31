import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const iconMap = preval`
  const fs = require('fs')
  const { join, resolve } = require('path')

  const iconPath = resolve('public/icons')
  const icons = fs.readdirSync(iconPath)

  module.exports = icons
    .reduce((acc, file) => {
      const content = fs.readFileSync(join(iconPath, file), 'utf8')

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

const Icon = ({ name, ...rest }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox={iconMap[name].viewBox} {...rest}>
    <path d={iconMap[name].path} />
  </Svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
