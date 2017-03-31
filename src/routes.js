import shortid from 'shortid'
import Home from './pages/Home'
import About from './pages/About'

const routes = [
  {
    id: shortid.generate(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: shortid.generate(),
    path: '/about',
    component: About,
  },
]

export default routes;
