import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import Writings from './pages/Writings'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path="writings" element={<Writings />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
