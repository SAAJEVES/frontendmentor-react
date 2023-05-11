import React from 'react';
import {NavLink} from "react-router-dom";
import close from "../shared/icon-close.svg";

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const SideNavbar = () => {
  const {sideBar, closeSideBar} = useContentProvider();
  return (
    <nav className={`sidebar ${sideBar ? "open" : ""}`} id="sidebar">
      <div className="close">
        <img src={close} alt="close-icon" onClick={closeSideBar} />
      </div>
      <div className="sidebar-navlinks">
        <NavLink to="/"><span className="num">00</span>Home</NavLink>
        <NavLink to="destination"><span className="num">01</span>Destination</NavLink>
        <NavLink to="crew"><span className="num">02</span>Crew</NavLink>
        <NavLink to="technology"><span className="num">03 </span>Technology</NavLink>
      </div>
    </nav>
  )
}

export default SideNavbar