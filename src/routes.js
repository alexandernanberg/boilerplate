import { v4 } from 'uuid'
import Home from './pages/Home'
import About from './pages/About'

const routes = [
  {
    id: v4(),
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: v4(),
    path: '/about',
    component: About,
  },
]

export default routes
