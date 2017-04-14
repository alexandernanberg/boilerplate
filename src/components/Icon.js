import React from 'react'
import classNames from 'classnames'
import style from '../styles/components/icon.scss'

const files = require.context('../assets/icons', false, /.svg$/)
files.keys().forEach(files)

const Icon = ({ name, ...props }) =>
  <svg {...props} className={classNames(style.component, props.className)}>
    <use xlinkHref={`#${name}`} />
  </svg>

export default Icon
