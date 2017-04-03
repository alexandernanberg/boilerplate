import React from 'react'
import style from '../styles/components/icon.scss'

const files = require.context('../assets/icons', false, /.svg$/)
files.keys().forEach(files)

export default function Icon({ type, ...props }) {
  return (
    <svg {...props} className={style.icon}>
      <use xlinkHref={`#${type}`} />
    </svg>
  )
}
