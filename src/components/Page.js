import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ children, ...props }) => (
  <Fragment>
    <Helmet {...props} />
    {children}
  </Fragment>
)
