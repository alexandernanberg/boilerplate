import shortid from 'shortid'
import Index from './pages/Index'
import About from './pages/About'

const routes = [
  {
    key: shortid.generate(),
    path: '/',
    exact: true,
    component: Index,
  },
  {
    key: shortid.generate(),
    path: '/about',
    component: About,
  },
]

export default routes
