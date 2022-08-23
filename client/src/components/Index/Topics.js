import React, { useEffect, useState } from 'react';
import './temas.css'

import globo from '../../img/globo.jfif'
import cuadroTexto from '../../img/cuadroTexto.png'
import ceroMensajes from '../../img/sinMensajes.jpg'
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';
import Loading from '../Loading';

const Topics = () => {

    const dispatch = useDispatch()
    const { tema, id } = useParams()
    const [isTema, setIsTema] = useState([])
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const isLoading = useSelector(state => state.isLoading)
    const [existTema, setExistTema] = useState(true)



    useEffect(() => {
        setLoadGlobal(true)
        axios.get(`http://localhost/foro/foro/server/hilos.php?id=${id}`)
            .then(res => {
                setIsTema(res.data)
                setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);
                // console.log(res.data)
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>{tema}</h1>
                <NavLink to="/mensajes">
                    <button>Crea nuevo tema</button>
                </NavLink>
            </div>
            <section className='hilos'>
                <table className="table" >
                    <thead>
                        <tr className='titles'>
                            <th className='topics-table'>Hilos</th>
                            <th className='title-table' id="users-table">Usuarios</th>
                            <th className='title-table' id="comments-table">Respuestas</th>
                            <th className='title-table' id="date-table">Fecha</th>
                        </tr>
                    </thead>
                    {existTema ?
                        isTema.map(data => {

                            return (
                                <Link to={`/hilos/${data.id}`}>

                                    <tbody key={data.id}>
                                        <tr className='titles-data'>
                                            <td className='topics-table'>{data.titulo_hilo}</td>
                                            <td className='data users-table-data'><span className='user-icon'>B</span><span className='user-iconA'>F</span><span className='user-iconB'>C</span></td>
                                            <td className='data comments-table-data'>{data.mensajes}</td>
                                            <td className='data'><div className='comments-table-data-hidden'><span>66</span><br></br></div>{data.fecha_creacion}</td>
                                        </tr>
                                    </tbody>
                                
                            </Link>)
                    })
                :
                <div className='ceroMessagesBox'><img className='sinMensajes' src={ceroMensajes} /> <br /> <h4 className='noMessages'>Aún no hay mensajes. Prueba a escribir un mensaje para iniciar el hilo.</h4></div>}
            </table>
            </section>
        </div>
    );
};

export default Topics;