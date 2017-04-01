import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import App from './components/App'

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
  document.getElementById('app'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install({
    onUpdateReady: () => {
      OfflinePluginRuntime.applyUpdate()
    },
    onUpdated: () => {
      window.location.reload()
    },
  })
}
