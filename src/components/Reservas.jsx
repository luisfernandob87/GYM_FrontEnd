import React, { useState, useEffect } from "react";
import "../CSS/Reservas.css";
import BottomMenu from "./BottomMenu";
import Top from "./Top";

const Reservas = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if body has dark-mode class to sync with global state
    const bodyHasDarkMode = document.body.classList.contains('dark-mode');
    setIsDarkMode(bodyHasDarkMode);
    
    // Set up a mutation observer to detect changes to body's class list
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const bodyHasDarkMode = document.body.classList.contains('dark-mode');
          setIsDarkMode(bodyHasDarkMode);
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  // Datos simulados
  const [plazasReservadas, setPlazasReservadas] = useState([8, 9, 10, 14]);
  const totalPlazas = 24;
  const disponibles = totalPlazas - plazasReservadas.length;

  const handleReservar = (numero) => {
    if (!plazasReservadas.includes(numero)) {
      setPlazasReservadas([...plazasReservadas, numero]);
    }
  };

  return (
    <>
    <Top isDarkMode={isDarkMode}/>
    <div className="reservas-container">
      <h2>DINAMO HIT</h2>
      <div className="info">
        <div className="info-row">
          <span>CESAR BENITEZ</span>
          <span>🕒 19:30-20:15</span>
        </div>
        <div className="info-row">
          <span>📍 SALA CYCLING</span>
        </div>
      </div>
      <div className="plazas-info">
        <p>
          Plazas reservadas: ({plazasReservadas.length}) | Plazas disponibles:{" "}
          {disponibles}
        </p>
      </div>
      <div className="plazas-grid">
        {Array.from({ length: totalPlazas }, (_, i) => i + 1).map((numero) => (
          <button
            key={numero}
            className={`plaza ${
              plazasReservadas.includes(numero) ? "reservada" : ""
            }`}
            onClick={() => handleReservar(numero)}
            disabled={plazasReservadas.includes(numero)}
          >
            {numero}
          </button>
        ))}
      </div>
      <div className="actions">
        <button className="btn btn-info">Más info</button>
        <button className="btn btn-reservar">Reservar</button>
      </div>
      {/* <BottomMenu /> */}
    </div>
    </>
  );
};

export default Reservas;
