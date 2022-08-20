import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    const isUser = localStorage.getItem("id")
    const userName = localStorage.getItem("nombre")

    return (
        <div className='content-nav'>
            <div className='nav'>
                <div className='logo'>
                    <a href='/'><h1><span className='welcome'>Soziali</span></h1></a>
                </div>
                <div className='containMU'>
                    <div className='menu'>
                        <ul>
                            <li><a href='/'>Inicio</a></li>
                            <li><a href='/contacto'>Contacto</a></li>
                        </ul>
                    </div>
                    <div className='user'>
                        <div className='userSesion'>
                            {isUser ? <h4><Link to="/perfil">{userName}</Link></h4> : <div><button><Link to="/login">Iniciar sesión</Link></button></div>}

                        </div>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;