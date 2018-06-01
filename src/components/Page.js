import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default function Page({ children, ...props }) {
  return (
    <Fragment>
      <Helmet {...props} />
      {children}
    </Fragment>
  )
}
