import React from 'react'
import "./styles/WorkCard.css"



const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>
            Projects
        </h1>
        <div className="project-container">
            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1670993746408-78e7e88983c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="sASs" />
                <h2 className='project-title'>Project Title</h2>
                <div className="pro-details">
                    <p>This is Text</p>
                    <div className="pro-btns"></div>
                </div>
            </div>    
        </div>        
    </div>
  )
}

export default WorkCard