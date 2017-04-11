import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import routes from '../routes'

const App = () =>
  <Router>
    <div>
      <Nav />
      { routes.map(props => <Route {...props} />) }
    </div>
  </Router>

export default App
