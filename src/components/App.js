import React from 'react'
import { v4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import InjectGlobalStyles from './InjectGlobalStyles'
import Header from './Header'
import routes from '../routes'

const App = () => (
  <Router>
    <div>
      <InjectGlobalStyles />
      <Header />
      { routes.map(props => <Route key={v4()} {...props} />) }
    </div>
  </Router>
)

export default App
