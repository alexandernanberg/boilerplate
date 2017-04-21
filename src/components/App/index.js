import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header'
import routes from './routes'

const App = () =>
  <Router>
    <div>
      <Header />
      { routes.map(props => <Route {...props} />) }
    </div>
  </Router>

export default App
