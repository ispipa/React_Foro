import React, { useEffect, useState } from 'react';
import './temas.css'

import globo from '../../img/globo.jfif'
import cuadroTexto from '../../img/cuadroTexto.png'
import ceroMensajes from '../../img/sinMensajes.jpg'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Topics = () => {


 const {tema, id} = useParams()
 const [isTema, setIsTema] = useState([])
 const [ceroMessages, setCeroMessages] = useState(false)
 

 useEffect(() => {
    axios.get(`http://localhost/foro/foro/server/hilos.php?id=${id}`)
    .then(res => {
        setIsTema(res.data)
        
        if(isTema.length == 0)
            setCeroMessages(true)
    })   
 })


 console.log(isTema.length)

    return (
        <div>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <div>
                    <h1>Hilos en...</h1>
                    <h2>{tema}</h2>
                </div>
            </section>
            <section className='hilos'>
                <div>
                    <NavLink to="/mensajes">
                        <button className='button-red'>Empieza un nuevo tema</button>
                    </NavLink>
                </div>
                
                {isTema.length != 0 &&
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
                </div> }
                {ceroMessages && <div className='ceroMessagesBox'><img className='sinMensajes' src={ceroMensajes}/> <br/> <h4 className='noMessages'>Aún no hay mensajes. Prueba a escribir un mensaje para iniciar el hilo.</h4></div>}
            </section>
        </div>
    );
};

export default Topics;