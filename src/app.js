import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './routes'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        {routes.map(({ id, ...props }) => (
          <Route {...props} key={id} />
        ))}
      </div>
    </Router>
  )
}

render(<App />, document.getElementById('app'))
