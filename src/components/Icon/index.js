import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const files = require.context('.', false, /.svg$/)
files.keys().forEach(files)

const Icon = ({ name, ...props }) =>
  <svg {...props} className={classNames(style.component, props.className)}>
    <use xlinkHref={`#${name}`} />
  </svg>

export default Icon
