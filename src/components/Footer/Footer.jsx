import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="contacto">
            <h4>Contactenos por:</h4>
            <ul>
                <li><b>Dirección:</b> Calle random 1234</li>
                <li><b>Teléfono:</b>  1234-567890</li>
                <li><b>Correo:</b>  emailfalso@gmail.com</li>
            </ul>
        </div>
        <div className="copyright">
            <p>C@pyright Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer