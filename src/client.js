import 'babel-polyfill'

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import OfflinePluginRuntime from 'offline-plugin/runtime'
import App from './components/App'
import './styles/global.scss'

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}
