import React from 'react'
import Page from '../components/Page'
import { H1 } from '../components/common/Title'

export default () => (
  <Page title="About" meta={[{ name: 'description', content: 'About us page' }]}>
    <H1>About.</H1>
  </Page>
)
