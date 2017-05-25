import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.scss'

const symbols = new Map()
const files = require.context('./glyphs', false, /.svg$/)
files.keys().forEach((item) => {
  const { id } = files(item).default
  symbols.set(id.replace(/_{2}(.*)/, ''), id)
})

const Icon = ({ name, ...props }) => (
  <svg
    {...props}
    className={classNames(
      style.component,
      props.className,
    )}>
    <use xlinkHref={`#${symbols.get(name)}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
