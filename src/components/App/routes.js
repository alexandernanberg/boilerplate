import { v4 } from 'uuid'
import Index from '../../pages/Index'
import About from '../../pages/About'

const routes = [
  {
    key: v4(),
    path: '/',
    exact: true,
    component: Index,
  },
  {
    key: v4(),
    path: '/about',
    component: About,
  },
]

export default routes
