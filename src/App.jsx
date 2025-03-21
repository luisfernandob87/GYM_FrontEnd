import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomMenu from './components/BottomMenu'
import ActivityCard from './components/ActivityCard'
import { ImageUploader } from './components/ImageUploader'
import Carrusel from './components/Carrusel'
import Actividades from './components/Actividades'
import Reservas from './components/Reservas'
import Login from './components/Login.jsx' // Actualiza la extensión aquí
import Principal from './components/Principal'
import ThemeToggleButton from './components/ThemeToggleButton.jsx'
import {HashRouter ,Routes, Route } from "react-router";

const activities = [
  {
    title: 'Actividades',
    image: "https://picsum.photos/350/150?random=5", // Reemplaza con la URL real de tu imagen
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <HashRouter>
        <Routes>
          <Route path="/" default element={<Login />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/carrusel" element={<Carrusel />} />
          <Route path="/activitycard" element={<ActivityCard />} />
          <Route path="/imageuploader" element={<ImageUploader />} />
          <Route path="/bottommenu" element={<BottomMenu />} />
          <Route path="/staff" element={<ImageUploader />} />
        </Routes>
        <ThemeToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </HashRouter>
    </div>
  );
}

export default App
