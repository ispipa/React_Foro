import React from 'react';

const Home = () => {
    return (
        <div>
            <section className='header'>
                <h1>Encuentra un tema del que hablar</h1>
            </section>
            <section>
                <div className='topic'>
                    <img></img>
                    <h2>Empleo/Emprendimiento</h2>
                </div>
                <div className='topic'>
                    <img></img>
                    <h2>Finanzas</h2>
                </div>
                <div className='topic'>
                    <img></img>
                    <h2>Salud y entrenamiento</h2>
                </div>
                <div className='topic'>
                    <img></img>
                    <h2>Relaciones</h2>
                </div>
                <div className='topic'>
                    <img></img>
                    <h2>Viajes</h2>
                </div>
                <div className='topic'>
                    <img></img>
                    <h2>Ocio y videojuegos</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;