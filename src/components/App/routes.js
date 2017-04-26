import { v4 } from 'uuid'
import Home from '../../pages/Home'
import About from '../../pages/About'

const routes = [
  {
    key: v4(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: v4(),
    path: '/about',
    component: About,
  },
]

export default routes
