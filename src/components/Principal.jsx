import React from 'react'
import Carrusel from './Carrusel'
import BottomMenu from './BottomMenu'
import ActivityCard from './ActivityCard'
import TopBienvenida from './TopBienvenida'

function Principal() {
  return (
    <>
    <TopBienvenida />
    <Carrusel  />
    <ActivityCard />
    <BottomMenu />   
    </>
  )
}

export default Principal