import React from 'react'
import { Link } from 'react-router-dom'
import './styles/global.css'
import {FaBars} from "react-icons/fa"

function Header() {
  return (
    <div className='Header flex justify-between items-center'>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className='nav-menu'>   
                <li>
                    <Link to="/" className='text-[#fff]'>Home</Link>
                </li>
                <li>
                    <Link to="/project" className='text-[#fff]'>Project</Link>
                </li>
                <li>
                    <Link to="/About" className='text-[#fff]'>About</Link>
                </li>
                <li>
                    <Link to="/contact" className='text-[#fff]'>Contact</Link>
                </li>
                
            </ul>
            <div className="hamburger">
                <FaBars size={20} style={{color:"#fff",cursor:"pointer"}}/>
            </div>
    </div>
  )
}

export default Header