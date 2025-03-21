import React, { useState, useEffect } from 'react';
import "../CSS/Top.css";

function Top({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`top-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isMobile ? (
        <>
          <button className="hamburger-button" onClick={toggleMenu}>
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className={`side-menu ${isDarkMode ? 'dark-mode' : ''} ${isMenuOpen ? 'open' : ''}`}>
            <nav className="menu-items">
              <a href="#/principal" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
                <span>Inicio</span>
              </a>
              <a href="#my-center" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
                <span>Mis Reservas</span>
              </a>
              <a href="#profile" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
                <span>Mi perfil</span>
              </a>
              <a href="/" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
                <span>Cerrar Sesión</span>
              </a>
            </nav>
          </div>
        </>
      ) : (
        <nav className="menu-items horizontal">
          <a href="#/principal" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
            <span>Inicio</span>
          </a>
          <a href="#my-center" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
            <span>Mis Reservas</span>
          </a>
          <a href="#profile" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
            <span>Mi perfil</span>
          </a>
          <a href="/" className={`menu-item ${isDarkMode ? 'dark-mode' : ''}`}>
            <span>Cerrar Sesión</span>
          </a>
        </nav>
      )}
    </div>
  );
}

export default Top;
