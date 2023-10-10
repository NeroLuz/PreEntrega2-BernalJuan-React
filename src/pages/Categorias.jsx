import React from 'react'
import "./Categorias.css"
import ItemListContainer from '../components/Items/ItemListContainer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Categorias = () => {

  const [categorySelected, setCategorySelected] = useState(null)

  return (
    <div>
      <div className="greeting-container">
        <h2>Envios gratis a todo el país</h2>
      </div>
      <div className="item-container">
        <div className="filter-container">
          <h4>Filtre su búsqueda:</h4>
          <ul id="category-list">
            <li onClick={() => setCategorySelected("men's clothing")}><Link to="/category/RopaHombre">Ropa Hombre</Link></li>
            <li onClick={() => setCategorySelected("women's clothing")}><Link to="/category/RopaMujer">Ropa Mujer</Link></li>
            <li onClick={() => setCategorySelected("jewelery")}><Link to="/category/Joyeria">Joyería</Link></li>
            <li onClick={() => setCategorySelected("electronics")}><Link to="/category/Electronicos">Electrónicos</Link></li>
          </ul>
        </div>
        <div className="grid-container">
          <ItemListContainer category={categorySelected}/>
        </div>
      </div>
    </div>
  )
}

export default Categorias