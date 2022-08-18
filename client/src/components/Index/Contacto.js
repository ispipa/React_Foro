import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './messages.css'
import email from '../../img/email.JPG'


import React from 'react';

const contacto = () => {
    return (
        <div>
            <section className='header2'>
                    <img src={email} alt="icono email" />
                    <h1>CONTACTO</h1>
        </section>

        <section className='formulario'>
    
                <p>¡Junt@s hacemos que este espacio crezca! ¿Te gustaría añadir un nuevo tema? Nuestro equipo revisará tu sugerencia.</p>
                <form>
                    <ul>
                        <li>
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre"></input>
                        </li>
                        <li>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"></input>
                        </li>
                        <li>
                            <label for="mensaje">Escribe aquí tu mensaje:</label>
                            <input type="text" id="mensaje" name="mensaje"></input>
                        </li>
                        <div id="btn_dir">
                            <button className='button-blanco'>ENVIAR</button>
                        </div>
                    </ul>
                </form>
        </section>
        </div>
    );
};

export default contacto;
