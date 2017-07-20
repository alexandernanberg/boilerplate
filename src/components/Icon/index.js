import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.scss'

const withMap = r => r.keys().reduce((acc, item) => {
  const { id } = r(item).default
  acc[id.match(/^[^-]*/)[0]] = id
  return acc
}, {})

const map = withMap(require.context('./glyphs', false, /.svg$/))

const Icon = ({ name, className, ...props }) => (
  <svg
    {...props}
    className={classNames(
      style.root,
      className,
    )}>
    <use xlinkHref={`#${map[name]}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
