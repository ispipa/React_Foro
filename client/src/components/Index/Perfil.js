import React from 'react';
import './Perfil.css';

import imgPerfil from '../../img/imgPerfil.png'
import globo from '../../img/globo.jfif'

const Perfil = () => {
    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>Editar perfil</h1>
            </div>
            <section className='cuerpo'>
                <span className='user-icon-perfil'><img></img>f</span>
                <button>Nueva foto</button>
                <form >
                    <input type="text" name="username" className='input_perfil' placeholder='fer4'></input><br />
                    <input type="text" name="email" className='input_perfil' placeholder='4@gmail.com'></input><br />
                    <input type="password" name="password" className='input_perfil' placeholder='*****'></input><br />

                    <div className='btn_dir'>
                        <button>Guardar</button>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Perfil;