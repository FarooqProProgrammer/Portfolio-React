import React from 'react'
import Hero from '../../common/Hero/Hero'
import Service from '../../common/Service'
import Gallery from '../../common/Gallery'

const Home = () => {
  return (
    <div>
        <Hero/>

        <div className="textContainer w-full h-[70px]  bg-[#3498db] flex justify-around items-center">
               <p className='text-5xl font-black text-white hover:text-gray-200'>Our Services</p>
                <button className='text-3xl font-black border-2 hover:border-4 hover:text-gray-400 border-white text-white pl-3 pb-3 pt-3 pr-3 cursor-pointer '>Add New Services</button>
        </div>
        <Service/>
        <div className="textContainer w-full h-[70px]  bg-[#3498db] flex justify-around items-center">
               <p className='text-5xl font-black text-white hover:text-gray-200'>Galleries</p>
        </div>
        <Gallery/>
    </div>
  )
}

export default Home