import React from 'react'
import "./styles/hero2.css"


function Her2({heading,paragraph}) {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Her2