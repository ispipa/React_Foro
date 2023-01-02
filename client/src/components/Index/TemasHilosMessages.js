import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams ,NavLink} from 'react-router-dom';
import './Hilos.css'
import cuadroTexto from '../../img/cuadroTexto.png';
import globo from '../../img/globo.jfif';
import {setLoadingGlobal} from "../../store/slices/isLoading.slice";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../Loading";
import ceroMensajes from "../../img/sinMensajes.jpg";

const TemasHilosMessages = () => {
    const { id,name } = useParams()
    const dispatch = useDispatch()
    const [isTema, setIsTema] = useState([])
    const [isTopic, setTopic] = useState([{}])
    const [existTema, setExistTema] = useState(true)
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const isLoading = useSelector(state => state.isLoading)
    const URL = process.env.REACT_APP_URL_API


    // const { fecha_creacion, mensajes, titulo_hilo, nombre   } =  useParams()
    useEffect(() => {
       // setLoadGlobal(true)
            axios.get(`${URL}/mensajes.php?id-mensaje=${id}`)
            .then(res => {
                setIsTema(res.data)
                const { temas, titulo_hilo,nombre,fecha,texto_mensaje } = res.data[0];
                setTopic({ temas: temas, titulo_hilo: titulo_hilo,nombre:nombre ,fecha:fecha,texto_mensaje:texto_mensaje});
                console.log(res.data)
               /* setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);*/
            })
    }, [])
   /* useEffect(() => {
        setLoadGlobal(true)
        axios.get(`${URL}/hilos.php?hilo=${id}`)
            .then(res => {
                const { temas, titulo_hilo,descripcion_hilo } = res.data.result[0];
                setTopic({ temas: temas, titulo_hilo: titulo_hilo,descripcion_hilo:descripcion_hilo });
                console.log(res.data)
                setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);
            })
    }, [])*/


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>{isTopic.temas}</h1>
                {console.log(isTopic)}
            </div>
            <section className='preguntaUsuario'>
                <div className='cajaPregunta'>
                    <div className='cajaMensaje'>
                        <div className='title-hilos'>
                            <p>{isTopic.titulo_hilo}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <table className="table">
                    <thead>
                    <tr className='titles'>
                        <th className='topics-table'>Usuario</th>
                        <th className='title-table' id="date-table">Fecha</th>
                    </tr>
                    </thead>
                    {existTema ?
                            <tbody>
                                <tr className='titles-data'>
                                    <td className='topics-table'><span className='user-icon'>{isTopic.nombre}</span></td>
                                    <td className='data'>{isTopic.fecha}</td>
                                </tr>
                            </tbody>
                        :
                        <div className='ceroMessagesBox'><img className='sinMensajes' src={ceroMensajes} /> <br /> <h4 className='noMessages'>Aún no hay mensajes. Prueba a escribir un mensaje para iniciar el hilo.</h4></div>}
                </table>

            </div>
            <div  dangerouslySetInnerHTML={{ __html: isTopic.texto_mensaje }} className="formulario-Contacto texto-user">
            </div>

        </div>
    );
};

export default TemasHilosMessages;