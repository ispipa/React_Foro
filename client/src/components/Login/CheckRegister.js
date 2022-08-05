import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './checkRegister.css'
import Login from './Login';


const CheckRegister = () => {

    const [login, setLogin] = useState(false)

    if(login){
        return <Login />
    }
       return (
        <div>
            <div className='box'>
                <h1 className='title-register'>GRACIAS POR REGISTRARTE</h1>
                <p className='txt-register'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua.</p>
                <button className='button-white' onClick={() => setLogin(true)}>Iniciar sesión</button>
            </div>
        </div>
    );
};

export default CheckRegister;