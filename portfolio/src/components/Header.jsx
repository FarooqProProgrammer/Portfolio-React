import React from 'react'
import { Link } from 'react-router-dom'
import './styles/global.css'
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

function Header() {
    const [click,setClick] = useState(false);
    const [color,setColor] = useState(false);
    const changeColor = () =>{
        if(window.screenY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",changeColor)
    const Handle = () =>{
        setClick(!click);
    }
  return (
    <div className={color ? `Header flex justify-between items-center header-bg`:'Header flex justify-between items-center'} >
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active":"nav-menu"}>   
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
                {click ? (
                    <FaTimes onClick={()=> setClick(false)} size={20} style={{color:"#fff",cursor:"pointer"}}/>
                ):(
                    <FaBars onClick={Handle} size={20} style={{color:"#fff",cursor:"pointer"}}/>
                )}
                
                
                
            </div>
    </div>
  )
}

export default Header