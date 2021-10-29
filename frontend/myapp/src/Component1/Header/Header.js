import React from 'react'
import './Styles.css'
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <div className="Header">
            
                <div >
                    
            <nav>
      <ul>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
          
      </ul>
    </nav>
                
            </div> 
             
        </div>
    )
}

export default Header
