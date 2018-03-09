import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

ReactDom.render(<App />, document.getElementById('root'))

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
