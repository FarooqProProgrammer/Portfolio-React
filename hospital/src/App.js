import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './common/Navbar/Navbar'
import About from './components/pages/About'
import Product from './components/pages/Product'
import Contact from './components/pages/Contact'
import Service from './components/pages/Service'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route  path='/Product' element={<Product/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path='/Service' element={<Service/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App