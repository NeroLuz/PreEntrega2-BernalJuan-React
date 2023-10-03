import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Detail/ItemDetailContainer'

const Detalle = () => {

    const {id} = useParams()

  return (
    <div>
        <div className="greeting-container">
            <h2>Envios gratis a todo el país</h2>
        </div>
          <ItemDetailContainer id={id}/>
    </div>
  )
}

export default Detalle