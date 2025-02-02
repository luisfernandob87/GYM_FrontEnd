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
import Login from './components/Login'

const activities = [
  {
    title: 'Actividades',
    image: "https://picsum.photos/350/150?random=5", // Reemplaza con la URL real de tu imagen
  }
];

function App() {
  return (
    <>
    {/* <Login /> */}


       <Carrusel />

        <ActivityCard/>

    

    {/* <Actividades />  */}

    {/* <Reservas />  */}
     {/* <ImageUploader /> */}

     <BottomMenu />
    </>
  )
}

export default App
