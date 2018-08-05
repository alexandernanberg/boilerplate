import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'
import { Router } from '@reach/router'
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
    <Fragment>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      />
      <Header />
      <Router>
        <Index path="/" />
        <About path="/about" />
        <NotFound default />
      </Router>
    </Fragment>
  )
}

export default hot(module)(App)
