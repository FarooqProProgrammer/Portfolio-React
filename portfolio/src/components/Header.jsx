import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import './styles/global.css'


export default function Header() {

    const [nav, setNav] = useState(false);

    return (
        <>
            <div className='header w-full h-[80px]  text-[#ffffff] border-2 border-black bg-[#2c3e50] flex_around cursor-pointer'>
                <p className='text-3xl'>Portfolio</p>

                <div className="links">
                    <Link to='/' className='text-xl ml-5 mr-1 transition-all hover:text-[#3498db]'>Home</Link>
                    <Link to='/Project' className='text-xl ml-5 mr-1 transition-all hover:text-[#3498db]'>Projects</Link>
                    <Link to='/Contact' className='text-xl ml-5 mr-1 transition-all hover:text-[#3498db]'>Contact</Link>
                    <Link to='/About' className='text-xl ml-5 mr-1 transition-all hover:text-[#3498db]'>About</Link>
                </div>

                <FaBars onClick={() => setNav(true)} className='lg:hidden md:block sm:block  text-3xl font-black' />

            </div>

            <div className={`mobile flex_around flex-col relative ${nav === true ? '' : 'hidden'} `}>
                <FaTimes onClick={() => setNav(false)} className='text-4xl absolute left-0 top-0 text-white cursor-pointer' />

                <Link to='/' className='text-3xl  text-white ml-5 mr-1 transition-all hover:text-[#3498db]'>Home</Link>
                <Link to='/Project' className='text-3xl  text-white ml-5 mr-1 transition-all hover:text-[#3498db]'>Projects</Link>
                <Link to='/Contact' className='text-3xl  text-white ml-5 mr-1 transition-all hover:text-[#3498db]'>Contact</Link>
                <Link to='/About' className='text-3xl  text-white ml-5 mr-1 transition-all hover:text-[#3498db]'>About</Link>

            </div>
        </>
    )
}
