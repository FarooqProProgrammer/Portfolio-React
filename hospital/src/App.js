import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './common/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App