// import { useState } from 'react'
import './App.css'
import  Item from './assets/Componentes/Myitem'
import Info from './assets/Componentes/Informacion'

function App() {

  return (
    <>
      <Item name="Gully"/>
      <Info city="Acapulco" age={2025} />
    </>
  )
}

export default App
