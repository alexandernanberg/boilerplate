import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectGlobalStyle from '../utils/injectGlobalStyle'
import Header from './Header'
import routes from '../routes'

const App = () => {
  injectGlobalStyle()

  return (
    <Router>
      <div>
        <Header />
        { routes.map(route => (
          <Route key={route.id} {...route} />
        ))}
      </div>
    </Router>
  )
}

export default App
