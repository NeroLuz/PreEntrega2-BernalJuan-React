import React from 'react'
import ItemCount from '../Items/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

  const {default_image} = item
  

  return (
    <div className="detail-container">
      <div className="image-container">
        {
          default_image !== undefined &&
          <img src={default_image.original_url} alt="Foto de la planta"/>
        }
      </div>
      <div className="text-container">
        <h2>Acerca de {item.common_name}</h2>
        <p>{item.description}</p>
        <p>Precio: $<b>2500</b></p>
        <div className="botonera">
          <ItemCount/>
          <button id="button-add">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

{/* <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-back">
            <h4>Acerca de {item.common_name}</h4>
            <p>{item.description}</p>
            <div className="botonera-detail">
              <ItemCount/>
              <button id="button-add">Agregar al carrito</button>
            </div>
        </div>
    </div>
</div> */}