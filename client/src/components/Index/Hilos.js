import axios from 'axios';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Hilos.css'
import cuadroTexto from '../../img/cuadroTexto.png';
import globo from '../../img/globo.jfif';

const Hilos = () => {
    const { id } =  useParams()
    const [ temas , setTemas ] = useState("Prueba")
    useEffect(() => {
        axios.get(`http://localhost/php/App_foro/foro/server/hilos.php?id=${id}`)
        .then(res =>console.log(res))
        .catch(error =>console.log(error))
    }, [])
    return (
        <div>
             <Link to = {`/mensajes/${id}`}><h2>Prueba para mensaje</h2></Link>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <h1>{}</h1>  
            </section>
            <section className='preguntaUsuario'>
                <div className='cajaPregunta'>

                        <div className='date'>
                                <p>27/07/2022</p>
                                <p>9:54</p>
                        </div>

                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>3</p>
                        </div>
                        
                        <div className='cajaMensaje'>
                            <div className='title'>
                                <p>¿Cómo darme de alta como autónomo</p>
                            </div>

                            <div className='userName'>
                                <p>Pau48</p>
                                
                            </div>
                        </div>
                </div>
            </section>
           
            <section className='description'>
                <p>Ya tengo cierta cartera de clientes y quiero hacer ya legal mis actividades</p>
            </section>
           
            <section className='responder'>
                   
                        <button className='button-rojo'>Responde a este hilo</button>
          
            </section>
            
            <section className='respuestas' >
                
                <div className='newComment'>

                    <div className='cajaMensaje answers'>
                        <div className='title'>
                            <p id='fecha'>27/07/2022</p>
                            <p>Suerte con el papeleo</p>
                        </div>

                        <div className='userName'>
                            <p>Davdi</p>
                        </div>
                    </div>
                </div>

                <div className='newComment'>

                    <div className='cajaMensaje answers'>
                        <div className='title'>
                            <p id='fecha'>27/07/2022</p>
                            <p>¿Y sii preguntas en una gestora?</p>
                        </div>

                        <div className='userName'>
                            <p>Davdi</p>
                        </div>
                    </div>
                </div>

                <div className='newComment'>

                    <div className='cajaMensaje answers'>
                        <div className='title'>
                            <p id='fecha'>27/07/2022</p>    
                            <p>Mejor no lo hagas</p>
                        </div>

                        <div className='userName'>
                            <p>Davdi</p>
                        </div>
                    </div>
                </div>

                <div className='newComment'>

                    <div className='cajaMensaje answers'>
                        <div className='title'>
                            <p id='fecha'>27/07/2022</p>
                            <p>debes ir a la Tesorería General de la Seguridad Social. Allí debe obtener el número de afiliación a la Seguridad Social si no lo tiene y darse de alta en el Régimen Especial de Trabajadores Autónomos</p>
                        </div>

                        <div className='userName'>
                            <p>Davdi</p>
                        </div>
                    </div>                    
                </div>

            </section>
            
        </div>
    );
};

export default Hilos;