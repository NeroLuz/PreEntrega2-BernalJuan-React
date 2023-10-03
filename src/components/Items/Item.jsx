import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    const {default_image} = item
      
    return (
        <div className="card-container">
            <img src={default_image.original_url} alt="Foto de la planta"/>
            <div className="card-body">
                <h4>{item.common_name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a cumque ex labore, corporis saepe minima.</p>
                <div className="card-footer">
                    <p className="precio">Precio: <b>$2500</b></p>
                    <p>Stock disponible: <b>{default_image.license}</b></p>
                </div>
            </div>
            <div className="botonera">
                <button id="card-button"><Link to={`/item/${item.id}`}>Ver detalles</Link></button>
            </div>
        </div>
    )
}

export default Item