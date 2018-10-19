import React from "react";
import style from "../style.css"
import Events from "./events.jsx";
import {NavLink}  from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';

const HeaderBar = () => {
return (
 <div >

<nav className="navbar">
   <div className="container-fluid">
   <div className="navbar-header">
     <a className="navbar-brand" href="#"></a>
   </div>
   <ul className="nav navbar-nav">
       <li><NavLink to ="/home"></NavLink></li>
     <li className="dropdown"><a className="" data-toggle="" href="#"><span className=""></span></a> 
       <ul className="dropdown-menu">
         <li><NavLink to ="/about"></NavLink></li>
         <li><NavLink to ="/events"></NavLink></li>
         <li><NavLink to ="/calendar"></NavLink></li>
         <li><NavLink to ="/bookAVisit"></NavLink></li>
       </ul>
     </li>
   <li><NavLink to ="/contacts"></NavLink></li>
   </ul>
   <ul className="nav navbar-nav navbar-right">
     <li><NavLink to ='/'></NavLink></li>
     <li><NavLink to ='/SignUp'></NavLink></li>
   </ul>
 </div>
</nav>
 </div>
 )
}
export default HeaderBar;
