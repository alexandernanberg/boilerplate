import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { injectGlobalStyle } from '../style'
import Header from './Header'
import Index from '../pages/Index'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

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
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default hot(module)(App)
