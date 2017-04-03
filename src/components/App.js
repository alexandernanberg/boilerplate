import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import routes from '../routes'

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        {routes.map(props => <Route {...props} />)}
      </div>
    </Router>
  )
}
