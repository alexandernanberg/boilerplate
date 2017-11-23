import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { injectGlobalStyle } from '../style'
import Header from './Header'
import routes from '../routes'

const App = styled.div`
  min-height: 100vh;
`

export default () => {
  injectGlobalStyle()

  return (
    <Router>
      <App>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        />
        <Header />
        <Switch>
          { routes.map(({ id, ...props }) => (
            <Route key={id} {...props} />
          ))}
        </Switch>
      </App>
    </Router>
  )
}
