import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

<div className="navbar">
            <div className="Home">
              <Link to="/" className="link">
                Home
              </Link>
            </div>
            <div className="contact">
              <Link to="/contact" className="link">
                Cashflow
              </Link>
            </div>
            <div className="about">
              <Link to="/about" className="link">
                Net Worth
              </Link>
            </div>
            <div className="signUp">
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </div>
          </div>
            
        </div>
    )
}

export default Navbar
