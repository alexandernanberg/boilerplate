import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { injectGlobalStyle } from '../style'
import Header from './Header'

const Loader = () => null

const Index = Loadable({
  loader: () => import('../pages/Index' /* webpackChunkName: "index.route" */),
  loading: Loader,
})

const About = Loadable({
  loader: () => import('../pages/About' /* webpackChunkName: "about.route" */),
  loading: Loader,
})

const NotFound = Loadable({
  loader: () => import('../pages/NotFound' /* webpackChunkName: "404.route" */),
  loading: Loader,
})

function App() {
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
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default hot(module)(App)
