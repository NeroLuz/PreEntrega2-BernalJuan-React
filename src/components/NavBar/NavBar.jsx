import React from 'react'
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <div id="logo-empresa">
                <Link to="/"><img src="../../src/assets/IMG/NR.png" alt="Logo de la empresa" /></Link>
                <p>NERITOS</p>
            </div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category">Categorías</Link></li>
                <li><Link to="/category/ofertas">Ofertas</Link></li>
                <li><Link to="/category/soporte">Soporte</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar