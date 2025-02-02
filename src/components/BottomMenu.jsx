import React from 'react'
import '../CSS/BottomMenu.css';

const BottomMenu = () => {
    return (
      <div className="bottom-menu">
        <a href="#today" className="menu-item">
          <span>Hoy tienes</span>
        </a>
        <a href="#my-center" className="menu-item active">
          <span>Mi centro</span>
        </a>
        <a href="#profile" className="menu-item">
          <span>Mi perfil</span>
        </a>
        <a href="#chat" className="menu-item">
          <span>Mi chat</span>
        </a>
        <a href="#more" className="menu-item">
          <span>Más</span>
        </a>
      </div>
    );
  };

export default BottomMenu
