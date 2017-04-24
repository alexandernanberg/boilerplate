import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './style.scss'

const files = require.context('./glyphs', false, /.svg$/)
files.keys().forEach(files)

const Icon = ({ name, ...props }) =>
  <svg {...props} className={classNames(style.component, props.className)}>
    <use xlinkHref={`#${name}`} />
  </svg>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
