import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import SideNavbar from '../component/SideNavbar';

// Css
import "../css/Navbar.css"

const RootLayout = () => {
  
  return (
    <div className="rootlayout">
        <Navbar />
        <SideNavbar />
        <Outlet />
    </div>
  )
}

export default RootLayout