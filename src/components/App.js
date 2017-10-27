import React from 'react'
import { v4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectStyle from '../utils/injectStyle'
import Header from './Header'
import routes from '../routes'

const App = () => {
  injectStyle()
  return (
    <Router>
      <div>
        <Header />
        { routes.map(props => <Route key={v4()} {...props} />) }
      </div>
    </Router>
  )
}

export default App
