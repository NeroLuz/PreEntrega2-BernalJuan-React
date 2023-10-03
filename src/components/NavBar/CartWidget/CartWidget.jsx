import React from 'react'
import { Link } from 'react-router-dom'
import useCounter from '../../../customHooks/useCounter'
import ItemCount from '../../Items/ItemCount'
import "./CartWidget.css"

const CartWidget = () => {

  return (
    <div id="cart-container">
        <i id="cart-logo" className="fa-solid fa-cart-shopping fa-2xl"></i>
        <div id="cart-number">0</div>
    </div>
  )
}

export default CartWidget