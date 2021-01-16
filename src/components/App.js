import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { GlobalStyle } from '../style'
import Header from './Header'

const Index = lazy(() => import('../pages/Index'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
