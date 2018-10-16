import React from "react";
import style from "../style.css"
import Events from "./events.jsx";
import {NavLink}  from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';

const HeaderBar = () => {
 return (
   <div >

 <nav className="navbar navbar-inverse">
   <div className="container-fluid">
     <div className="navbar-header">
       <a className="navbar-brand" href="#"></a>
     </div>
     <ul className="nav navbar-nav">
       <li className="active"><a href="src/home.jsx">Home</a></li>
       <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">More Info <span className="caret"></span></a>
         <ul className="dropdown-menu">
           <li><NavLink to ="/about">About</NavLink></li>
           <li><NavLink to ="/events">Events</NavLink></li>
           <li><NavLink to ="/calendar">Calendar</NavLink></li>
           <li><NavLink to ="/bookAVisit">BookAVisit</NavLink></li>
         </ul>
       </li>
       <li><NavLink to ="/contacts">Contacts</NavLink></li>
     </ul>
     <ul className="nav navbar-nav navbar-right">
       <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
       <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
     </ul>
   </div>
 </nav>
   </div>
   
   )
 }
 export default HeaderBar;
