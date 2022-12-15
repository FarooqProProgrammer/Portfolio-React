import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Hero.css'
function Hero() {
    const Intro = "https://images.unsplash.com/photo-1670954208723-d297a0d9ffc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    return (
        <div className='hero'>
            <div className="mask">
                <img className='intro-img' src={Intro} alt=" Intro Image" />
            </div>
            <div className="content">
                <p>HI , I'M A FREELANCER.</p>
                <h1>React Developer</h1>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
                

            </div>
        </div>
    )
}

export default Hero