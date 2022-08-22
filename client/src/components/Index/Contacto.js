import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './contacto.css'
import email from '../../img/email.JPG'


import React from 'react';

const contacto = () => {
    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>Contacto</h1>
            </div>

            <section className='formulario-Contacto'>

                <div className='bajoHeader'>
                    <p>¡Junt@s hacemos que este espacio crezca! </p>
                    <p>¿Te gustaría añadir un nuevo tema? Nuestro equipo revisará tu sugerencia.</p>
                </div>

                <form className='formularioCaja'>
                        <div className='formList'>
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre"></input>
                        </div>
                        <div className='formList'>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div className='formList'>
                            <label for="mensaje">Escribe aquí tu mensaje:</label>
                            <input type="text" id="mensaje" name="mensaje"></input>
                        </div>
                        <div id="btn_dir">
                            <button>ENVIAR</button>
                        </div>
                </form>
            </section>
        </div>
    );
};

export default contacto;
