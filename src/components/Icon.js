import React from 'react'

const files = require.context('../assets/icons', false, /.svg$/);
files.keys().forEach(files);

export default function Icon({ name, ...props }) {
  return (
    <svg {...props} className="icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
