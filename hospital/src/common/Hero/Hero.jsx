import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='w-full h-[500px]  flex lg:flex-row md:flex-col sm:flex-col  justify-around items-center '>
            <div className="left_box lg:w-[550px] lg:h-[280px] sm:w-full  border-2 border-black">

            </div>
            <div className="right_box lg:w-[300px] lg:h-[400px] sm:w-full  border-2 border-black">

            </div>
    </div>
  )
}

export default Hero