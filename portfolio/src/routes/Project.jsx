import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Her2 from '../components/Her2'
import WorkCard from '../components/WorkCard'

function Project() {
  return (
    <div>
      <Header/>
      <Her2  heading="PROJECTS." paragraph="Some of my Most Recent Works " />
      <WorkCard/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Project