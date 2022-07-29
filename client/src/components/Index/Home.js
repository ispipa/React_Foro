import React from 'react';
import '../../styles/home.css'

import maletin from '../../img/maletin.jfif'
import dolar from '../../img/dolar.jfif'
import ocio from '../../img/ocio.jfif'
import relaciones from '../../img/person.jfif'
import pesas from '../../img/pesas.jfif'
import viajes from '../../img/viajes.jfif'



const Home = () => {
    return (
        <div>
            <section className='header'>
                <h1>Encuentra un tema del que hablar</h1>
            </section>
            <section className='topics'>
                <div className='topic'>
                    <img src={maletin} alt="maletin"/>
                    <h2>Empleo/Emprendimiento</h2>
                </div>
                <div className='topic'>
                    <img src={dolar} alt="dolar"/>
                    <h2>Finanzas</h2>
                </div>
                <div className='topic'>
                    <img src={pesas} alt="pesas"/>
                    <h2>Salud y entrenamiento</h2>
                </div>
                <div className='topic'>
                    <img src={relaciones} alt="relaciones"/>
                    <h2>Relaciones</h2>
                </div>
                <div className='topic'>
                    <img src={viajes} alt="viajes"/>
                    <h2>Viajes</h2>
                </div>
                <div className='topic'>
                    <img src={ocio} alt="ocio"/>
                    <h2>Ocio y videojuegos</h2>
                </div>
            </section>
            <footer>
                <p>¿No encuentras tu tema? <a href="">Escríbenos</a></p>
            </footer>
        </div>
    );
};

export default Home;