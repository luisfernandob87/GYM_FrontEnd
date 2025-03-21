import React, { useState } from "react";
import "../CSS/Login.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Iniciar sesión con:", username, password);
    // Aquí puedes simular la llamada al backend
    navigate("/principal");
  };

  const handleStaffLogin = () => {
    navigate("/staff");
  };

  const handleRecoverPassword = () => {
    console.log("Recuperar contraseña");
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
      </div>
      <input
        type="text"
        className="login-input"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        INICIAR SESIÓN
      </button>
      <button className="login-button" onClick={handleStaffLogin}>
        LOGIN STAFF
      </button>
      <div
        className="login-recover"
        onClick={handleRecoverPassword}
      >
        OBTENER / RECUPERAR CONTRASEÑA
      </div>
    </div>
  );
};

export default Login;
