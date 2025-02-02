import React, { useState } from "react";
import "../CSS/Reservas.css";

const Reservas = () => {
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
    </div>
  );
};

export default Reservas;
