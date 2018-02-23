import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { injectGlobalStyle } from '../style'
import Header from './Header'
import routes from '../routes'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  injectGlobalStyle()

  return (
    <Router>
      <Wrapper>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        />
        <Header />
        <Switch>
          {routes.map(({ id, ...props }) => <Route key={id} {...props} />)}
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default hot(module)(App)
