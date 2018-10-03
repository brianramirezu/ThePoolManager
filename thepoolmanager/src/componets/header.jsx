import React from "react";
import Events from "./Events.jsx";
import {NavLink}  from 'react-router-dom';

const Header = () => {
  return (
    <div className ="header">
      <ul>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/eventos">Eventos</NavLink>
      <NavLink to="/visita">Solicita tu visita</NavLink>
      <NavLink to="/constactos">Contactos</NavLink>
</ul>
      </div>
    )
  }
  export default Header;
