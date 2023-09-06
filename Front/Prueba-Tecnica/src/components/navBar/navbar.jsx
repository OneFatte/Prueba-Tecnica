import React from 'react'
import './navbar.css';

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBarContainer'>
            <div className='logoContainer'>
            <Link to={"/"}>
                    <img className='navLogo' src="https://png.pngtree.com/png-clipart/20230318/original/pngtree-soccer-ball-sport-game-png-image_8994766.png" alt="" />
            </Link>
            
            </div>
            
            <div className='btnLista'> 
            <h2>Selecciona:</h2>

                <Link className='btn' to={"/"}>
                    Productos
                </Link>
                <Link className='btn' to={"/cotizaciones"}>
                    Cotizaciones
                </Link>

                <Link className='btn' to={"/"}>
                    Clientes
                </Link>

                <Link className='btn' to={"/"}>
                    Nosotros
                </Link>

            </div>
        </div>
    )
}

export default NavBar; 