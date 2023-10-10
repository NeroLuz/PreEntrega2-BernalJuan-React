import React from 'react'
import ItemCount from '../Items/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  return (
    <div className="detail-container">
      <div className="image-container">
          <img src={item.image} alt="Foto del producto"/>
      </div>
      <div className="text-container">
        <h2>Acerca de {item.title}</h2>
        <p>{item.description}</p>
        <p>Precio: $<b>{item.price}</b></p>
        <div className="botonera">
          <ItemCount/>
          <button id="button-add">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail