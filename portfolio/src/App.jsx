import React from 'react'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Project from './routes/Project'
import {Routes,Route} from "react-router-dom"


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </>
  )
}

export default App