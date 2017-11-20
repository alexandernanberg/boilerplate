import { v4 } from 'uuid'
import Index from './pages/Index'
import About from './pages/About'

const routes = [
  {
    id: v4(),
    path: '/',
    exact: true,
    component: Index,
  },
  {
    id: v4(),
    path: '/about',
    component: About,
  },
]

export default routes
