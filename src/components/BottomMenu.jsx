import React from 'react'
import '../CSS/BottomMenu.css';

const BottomMenu = () => {
    return (
      <div className="bottom-menu">
        <a href="#/principal" className="menu-item">
          <span>Inicio</span>
        </a>
        <a href="#my-center" className="menu-item active">
          <span>Mis Reservas</span>
        </a>
        <a href="#profile" className="menu-item">
          <span>Mi perfil</span>
        </a>
        <a href="/" className="menu-item">
          <span>Cerrar Sesión</span>
        </a>
      </div>
    );
  };

export default BottomMenu
