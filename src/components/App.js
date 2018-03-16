import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { injectGlobalStyle } from '../style'
import Header from './Header'
import routes from '../routes'

const App = () => {
  injectGlobalStyle()

  return (
    <Router>
      <Fragment>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        />
        <Header />
        <Switch>
          {routes.map(({ id, ...props }) => <Route key={id} {...props} />)}
        </Switch>
      </Fragment>
    </Router>
  )
}

export default hot(module)(App)
