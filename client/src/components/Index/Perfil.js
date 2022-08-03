import React from 'react';
import './Perfil.css';

import imgPerfil from '../../img/imgPerfil.png'
import globo from '../../img/globo.jfif'

const Perfil = () => {
    return (
        <div>
            <section className='header2'>
                <img src={globo} alt="globo de conversación"/>
                <h1>Editar perfil</h1>
            </section>
            <section className='cuerpo'>
                <img className='img-perfil' src={imgPerfil} alt="imagen de perfil"/>
                <button className='button-white'>CAMBIAR FOTO</button>
                <form >
                    <input type="text" name="username" className='input_perfil'></input><br/>
                    <input type="text" name="email" className='input_perfil'></input><br/>
                    <input type="password" name="password" className='input_perfil'></input><br/>

                    <div className='btn_dir'>
                        <button className='button-red'>GUARDAR</button>
                    </div>
                    
                </form>
            </section>
        </div>
    );
};

export default Perfil;