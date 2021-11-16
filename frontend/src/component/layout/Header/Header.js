import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css'
import { FaSearch } from 'react-icons/fa'

const Header = ({ auth }) => {
  const [toggle, settoggle] = useState(false)

  var body = document.getElementsByTagName('body')[0];
  
  const toggleNavigation = (event) => {
    event.preventDefault();
    body.classList.toggle('nav-open');
    settoggle(true)
  }
  
  const toggleHome = (event) => {
    if (toggle===true){
      body.classList.toggle('nav-open');
    }
    settoggle(false)
  }

  return (
    <div className="fixed-bar">
      <Link to="/search"><div className="search skip"><FaSearch  size={28}/></div></Link>       
      <a href="#navigation" onClick={toggleNavigation} className="nav-trigger">
        Menu <span></span>
      </a>
      <nav className="nav-container" id="navigation">
        <ul className="nav">
          <li><Link to="/" className="nav1" onClick={toggleHome}>HOME</Link></li>
          <li><Link to="/products" className="nav2" onClick={toggleHome}>PRODUCTS</Link></li>
          <li><Link to="/contact" onClick={toggleHome}>CONTACT</Link></li>
          <li><Link to="/about" onClick={toggleHome}>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;
