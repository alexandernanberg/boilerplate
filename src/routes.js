import { v4 } from 'uuid'
import Index from './pages/Index'
import About from './pages/About'
import { PageNotFound } from './pages/Error'

export default [
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
  {
    id: v4(),
    component: PageNotFound,
  },
]
