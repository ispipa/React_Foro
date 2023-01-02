import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './checkRegister.css'
import Login from './Login';


const CheckRegister = (props) => {

    const [login, setLogin] = useState(false)

    if (login) {
        return <Login />
    }
    return (
        <div>
            <div class="success-checkmark">
                <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                </div>
            </div>
            <div className='box'>
                <h1 id="h1box">GRACIAS POR REGISTRARTE {props.nombre}</h1>
                <p className='txt-register'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button className='form-button' onClick={() => setLogin(true)}>Iniciar sesión</button>
            </div>
        </div>
    );
};

export default CheckRegister;