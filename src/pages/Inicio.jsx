import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import "./Inicio.css"

const Inicio = () => {
  return (
    <div>
      <div className="greeting-container">
        <h2>Bienvenido a Nerito´s Shop</h2>
      </div>
      <div className="grid-container">
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default Inicio