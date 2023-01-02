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

const Hilos = () => {
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
        axios.get(`${URL}/mensajes.php?id=${id}`)
            .then(res => {
                setIsTema(res.data)
                console.log(res.data)
            })
    }, [])
    useEffect(() => {
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
    }, [])


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>{isTopic.temas}</h1>
                <NavLink to={`/comentar/${id}`}>
                    <button>Comenta</button>
                </NavLink>
            </div>
            <section className='preguntaUsuario'>
                <div className='cajaPregunta'>
                    <div className='cajaMensaje'>
                        <div className='title-hilos'>
                            <p>{isTopic.titulo_hilo}</p>
                        </div>
                        <div className='description' dangerouslySetInnerHTML={{ __html: isTopic.descripcion_hilo }}>

                        </div>
                        <div className='userName-hilos'>
                            <span className='user-iconA'>{name[0]}</span>
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <table className="table">
                    <thead>
                        <tr className='titles'>
                            <th className='topics-table'>Mensajes</th>
                            <th className='title-table' id="users-table">Usuarios</th>
                            <th className='title-table' id="date-table">Fecha</th>
                        </tr>
                    </thead>
                    {existTema ?
                        isTema.map(data => {

                            return (
                                    <tbody key={data.id}>
                                        <Link to={`/mensajes-hilos/${data.id}`}>
                                            <tr className='titles-data'>
                                                <td className='topics-table' dangerouslySetInnerHTML={{ __html: data.texto_mensaje }}></td>
                                                <td className='data users-table-data'><span className='user-icon'>{data.nombre[0]}</span></td>
                                                <td className='data'>{data.fecha}</td>
                                            </tr>
                                        </Link>
                                    </tbody>
                                )
                        })
                        :
                        <div className='ceroMessagesBox'><img className='sinMensajes' src={ceroMensajes} /> <br /> <h4 className='noMessages'>Aún no hay mensajes. Prueba a escribir un mensaje para iniciar el hilo.</h4></div>}
                </table>

            </div>

        </div>
    );
};

export default Hilos;