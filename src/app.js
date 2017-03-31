import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import Nav from './components/Nav'
import routes from './routes'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        {routes.map(props => <Route {...props} />)}
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}
