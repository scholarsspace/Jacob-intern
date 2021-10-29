import React from 'react'
import './Styles1.css'

import {NavLink} from 'react-router-dom'
function Header1() {
    function navbarScroll() {
        var y = window.scrollY;
        if (y > 10) {
          document.querySelector(".header").classList.add("small");
        } else if (y < 10) {
            document.querySelector(".header").classList.remove("small");
        }
      }
      window.addEventListener('scroll', function() {
        console.log('scrolling');
        navbarScroll()
});
    return (
<div>
    <div className="header">
        <div className="header_logo">
        
                    
                    <nav>
              <ul>
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li>
                  
              </ul>
            </nav>
                        
        </div>
    </div>
    {/* <div className="offset">
         <p>Scroll down to initiate resizing of the page header.</p>
    </div> */}
</div>
    )
}

export default Header1
