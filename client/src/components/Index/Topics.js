import React from 'react';
import '../../styles/temas.css'

import maletin from '../../img/maletin.jfif'

const Topics = () => {

    return (
        <div>
            <section className='header2'>
                <img src={maletin} alt="maletin" />
                <div>
                    <h1>Hilos en...</h1>
                    <h2>Empleo / Emprendimiento</h2>
                </div>
            </section>
            <section className='hilos'>
                <div>
                    <button>Empieza un nuevo tema</button>
                </div>
                <div className='comments'>
                    <div className='caja'>
                        <div className='date'>
                            <p>27/07/2022</p>
                            <p>9:54</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com'></img>
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
                            <img className='num_com'></img>
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
                            <img className='num_com'></img>
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
                            <img className='num_com'></img>
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