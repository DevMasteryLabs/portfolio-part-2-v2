import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SkillDetails from './pages/SkillDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills/:id' element={<SkillDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
