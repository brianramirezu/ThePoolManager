import React from "react"


const Header = () => {
  return (
    <div className ="header">
      <ul>
        <a href="#"><span className="icon-house"></span>Inicio</a>
          <a href="#"><span className="icon-earth"></span>Servicios</a>
          <a href="./Events.jsx"><span className="icon-suitcase"></span>Eventos</a>
          <a href="#"><span className="icon-rocket"></span>Solicita tu visita</a>
          <a href="#"><span className="icon-mail"></span>Contactos</a>
        </ul>
      </div>
    )
  }
  export default Header;
