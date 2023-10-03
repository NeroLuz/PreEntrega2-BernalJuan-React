import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import "./Inicio.css"

const Inicio = () => {
  return (
    <div>
      <div className="greeting-container">
        <h2>Bienvenido a Nerito´s Vivero</h2>
      </div>
      <div className="flex-container">
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default Inicio