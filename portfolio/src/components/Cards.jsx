import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Cards.css"


const Cards = () => {
  return (
    <div className='pricing'>
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>
                <div className="card">
                    <h3>- Medium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p>- 5 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>
                <div className="card">
                    <h3>- Feaured -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>- 8 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>
                
            </div>
    </div>
  )
}

export default Cards