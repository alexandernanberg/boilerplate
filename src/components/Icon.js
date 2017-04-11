import React from 'react'
import classNames from 'classnames'
import style from '../styles/components/icon.scss'

const files = require.context('../assets/icons', false, /.svg$/)
files.keys().forEach(files)

const Icon = ({ type, ...props }) => (
  <svg {...props} className={classNames(style.icon, props.className)}>
    <use xlinkHref={`#${type}`} />
  </svg>
)

export default Icon
