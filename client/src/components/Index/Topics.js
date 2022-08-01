import React from 'react';
import './temas.css'

import globo from '../../img/globo.jfif'
import cuadroTexto from '../../img/cuadroTexto.png'
import { NavLink } from 'react-router-dom';

const Topics = () => {

    return (
        <div>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <div>
                    <h1>Hilos en...</h1>
                    <h2>Empleo / Emprendimiento</h2>
                </div>
            </section>
            <section className='hilos'>
                <div>
                    <NavLink to="/mensajes">
                        <button className='button-red'>Empieza un nuevo tema</button>
                    </NavLink>
                </div>
                <div className='comments'>
                    <div className='caja'>
                        <div className='date'>
                            <p>27/07/2022</p>
                            <p>9:54</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>3</p>
                        </div>
                        <div>
                            <div className='title'>
                                <p>¿Cómo darme de alta como autónomo?</p>
                            </div>
                            <div className='userName'>
                                <p>Pau48</p>
                            </div>
                        </div>
                    </div>
                    <div className='caja'>
                        <div className='date'>
                            <p>27/07/2022</p>
                            <p>9:54</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>3</p>
                        </div>
                        <div>
                            <div className='title'>
                                <p>¿Cómo darme de alta como autónomo?</p>
                            </div>
                            <div className='userName'>
                                <p>Pau48</p>
                            </div>
                        </div>
                    </div>
                    <div className='caja'>
                        <div className='date'>
                            <p>27/07/2022</p>
                            <p>9:54</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>3</p>
                        </div>
                        <div>
                            <div className='title'>
                                <p>¿Cómo darme de alta como autónomo?</p>
                            </div>
                            <div className='userName'>
                                <p>Pau48</p>
                            </div>
                        </div>
                    </div>
                    <div className='caja'>
                        <div className='date'>
                            <p>27/07/2022</p>
                            <p>9:54</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>3</p>
                        </div>
                        <div>
                        <div className='title'>
                            <p>¿Cómo darme de alta como autónomo?</p>
                        </div>
                        <div className='userName'>
                            <p>Pau48</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Topics;