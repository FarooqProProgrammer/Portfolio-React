import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/About' element={<About/>}/>
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App