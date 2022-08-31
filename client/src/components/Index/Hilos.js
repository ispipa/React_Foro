import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Hilos.css'
import cuadroTexto from '../../img/cuadroTexto.png';
import globo from '../../img/globo.jfif';

const Hilos = () => {
    const { id } = useParams()
    const [temas, setTemas] = useState("Prueba")
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
        <div className='general-content2'>
            <div className='topic'>
                <h1>Empleo y emprendimiento</h1>
                <button>Comenta</button>
            </div>
            <section className='preguntaUsuario'>
                <div className='cajaPregunta'>
                    <div className='cajaMensaje'>
                        <div className='title-hilos'>
                            <p>¿Cómo darme de alta como autonomo?</p>
                        </div>
                        <div className='description'>
                        <p>Ya tengo cierta cartera de clientes y quiero hacer ya legal mis actividades</p>
                        </div>
                        <div className='userName-hilos'>
                            <span className='user-icon'>G</span>
                            <p>Gato</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <table className="table">
                    <thead>
                        <tr className='titles'>
                            <th className='topics-table'>Mensajes</th>
                            <th className='title-table' id="users-table">Usuario</th>
                            <th className='title-table' id="date-table">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='titles-data'>
                            <td className='topics-table'>No se sobre el tema, tenía la misma pregunta</td>
                            <td className='data users-table-data'><span className='user-iconA'>F</span></td>
                            <td className='data'>21/08/2022</td>
                        </tr>
                        <tr className='titles-data'>
                            <td className='topics-table'>Suerte con el papeleo jaja</td>
                            <td className='data users-table-data'><span className='user-icon'>A</span></td>
                            <td className='data'>20/08/2022</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Hilos;