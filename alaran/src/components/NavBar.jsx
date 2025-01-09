import React from 'react'

const NavBar = () => {
  return (
    <div>
       <nav>
        <div className="logo"> LOGO</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-cart"></i>
        </div>
       </nav>
    </div>
  )
}

export default NavBar
