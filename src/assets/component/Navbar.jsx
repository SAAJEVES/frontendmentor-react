import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../shared/logo.svg";
import hamburger from "../shared/icon-hamburger.svg";

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const Navbar = () => {
  const {openSideBar} = useContentProvider();

  return (
    <header>
    <div className='navbar'>
      <nav className='main-navbar'>
        <div className="logo">
          <img src={logo} alt="space-tourism-logo" />
        </div>
        <div className="navlinks-container">
          <div className="navlinks">
            <NavLink to="/"><span className="num">00</span>Home</NavLink>
            <NavLink to="destination"><span className="num">01</span>Destination</NavLink>
            <NavLink to="crew"><span className="num">02</span>Crew</NavLink>
            <NavLink to="technology" ><span className="num">03 </span>Technology</NavLink>
          </div>
        </div>
        <div className="hamburger" id="hamburger"  onClick={openSideBar} >
          <img src={hamburger} alt="open-button" />
        </div>
      </nav>
      
    </div>
    </header>
  )
}

export default Navbar;