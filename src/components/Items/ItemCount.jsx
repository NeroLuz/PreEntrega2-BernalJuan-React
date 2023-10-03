import React from 'react'
import { useState } from 'react'
import useCounter from '../../customHooks/useCounter'
import "./ItemCount.css"

const ItemCount = () => {
    
    const {counter, incrementar, decrementar} = useCounter()

  return (
    <div id="botonera-counter">
        <button id="boton-restar" onClick={decrementar}> - </button>
        <span id="detail-number"><b>{counter}</b></span>
        <button id="boton-sumar" onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount