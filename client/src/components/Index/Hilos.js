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
    const [isTema, setIsTema] = useState([])
    // useEffect(() => {
    //     axios.get(`http://localhost/foro/foro/server/mesajes.php`)
    //     .then(res =>console.log(res))
    //     .catch(error =>console.log(error))
    // }, [])

    // const { fecha_creacion, mensajes, titulo_hilo, nombre   } =  useParams()
    useEffect(() => {
        // setLoadGlobal(true)     
        axios.get(`http://localhost/foro/foro/server/mensajes.php?id=${id}`)
            .then(res => {                               
                // setIsTema(res.data)
                // setTimeout(() => {                    
                //     setLoadGlobal(false)
                // }, 2000);
                console.log(res.data)
            })
    }, [])

    return (
        <div>
             <Link to = {`/mensajes/${id}`}><h2>Prueba para mensaje</h2></Link>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <h1>{}</h1>  
            </section>
            <section className='preguntaUsuario'>
                {isTema.map(data => {
                    return(<div className='cajaPregunta'>
                        <div className='date'>
                            <p>{data.fecha_creacion}</p>
                        </div>
                        <div className='totalComments'>
                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo"/>
                            <p>{data.mensajes}</p>
                        </div>
                        <div className='cajaMensaje'>
                            <div className='title'>
                                <p>{data.titulo_hilo}</p>
                            </div>

                            <div className='userName'>
                                <p>{data.nombre}</p>   
                            </div>
                        </div>
                    </div>)
                })}
                        
            </section>
           
            <section className='description'>
                <p>Ya tengo cierta cartera de clientes y quiero hacer ya legal mis actividades</p>
            </section>
           
            <section className='responder'>
                   
                        <button className='button-rojo'>Responde a este hilo</button>
          
            </section>
            
            <section className='respuestas' >
              
            {isTema.map(data => {
                        return(
                        <div className='newComment'>
                            <div className='cajaMensaje answers'>
                                <div className='title'>
                                    <p id='fecha'>{data.fecha}</p>
                                    <p>{data.texto_mensaje}</p>
                                </div>
                                <div className='userName'>
                                    <p>{data.nombre}</p>
                                 </div>
                            </div>
                        </div>)
                    }) }  
            </section>
            
        </div>
    );
};

export default Hilos;