import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  const [isActive,setIsActive]=useState("dashboard")
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">Chart potal</div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    
    <li className={`nav-item ${isActive == "dashboard" ? "active" :""} `} onClick={()=>setIsActive("dashboard")}>
      <NavLink className="nav-link" to="/dashboard"  style={{cursor:"pointer"}}>
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span></NavLink>
    </li>

    <li className={`nav-item ${isActive == "charts" ? "active" :""}`}  onClick={()=>setIsActive("charts")}>
      <NavLink className="nav-link" to="/charts" style={{cursor:"pointer"}}>
      <i className="fas fa-fw fa-chart-area" />
        <span>Charts</span></NavLink>
    </li>

    <li className={`nav-item ${isActive == "logout" ? "active" :""}`} onClick={()=>setIsActive("logout")}>
      <NavLink className="nav-link" to={'/'}  >
      <i class="fas fa-solid fa-right-from-bracket"></i>
        <span>Logout</span></NavLink>
    </li>
  </ul>
  )
}

export default SideBar
