import shortid from 'shortid'
import Home from './pages/Home'
import About from './pages/About'

const routes = [
  {
    key: shortid.generate(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: shortid.generate(),
    path: '/about',
    component: About,
  },
]

export default routes
