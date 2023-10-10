import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({item}) => {
      
    return (
        <div className="card-container">
            <img src={item.image} alt="Foto del producto"/>
            <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="card-footer">
                    <p className="precio">Precio: <b>$2500</b></p>
                    <p>Stock disponible: <b>{item.rating.count}</b></p>
                </div>
            </div>
            <div className="botonera">
                <button id="card-button"><Link to={`/item/${item.id}`}>Ver detalles</Link></button>
            </div>
        </div>
    )
}

export default Item