import React, { useContext } from 'react'
import Carrusel from './Carrusel'
import BottomMenu from './BottomMenu'
import ActivityCard from './ActivityCard'
import TopBienvenida from './TopBienvenida'
import Top from './Top'
import { useState, useEffect } from 'react'

const Principal = () => {
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
  
  return (
    <div>
    <Top isDarkMode={isDarkMode}/>
    <Carrusel  />
    <ActivityCard />
    </div>
  )
}

export default Principal