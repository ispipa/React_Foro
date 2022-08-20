import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './pruebasStyles.css'

const PruebasStyles = () => {
    const isUser = localStorage.getItem("id")
    const userName = localStorage.getItem("nombre")

    return (

        <div>
            <div className='nav'>
                <div className='logo'>
                    <h1><span className='welcome'>Soziali</span></h1>
                </div>
                <div className='containMU'>
                    <div className='menu'>
                        <ul>
                            <li>Inicio</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className='user'>
                        <div className='userSesion'>
                            {isUser ? <h4><Link to="/perfil">{userName}</Link></h4> : <div><button><Link to="/login">Iniciar sesión</Link></button></div>}

                        </div>
                    </div>
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default PruebasStyles;