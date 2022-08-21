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

                {existTema ?
                    isTema.map(data => {

                        return (
                            <Link to = {`/hilos/${data.id}`}>
                                <div className='comments' key={data.id}>
                                    <div className='caja'>
                                        <div className='date'>
                                            <p>{data.fecha_creacion}</p>
                                        </div>
                                        <div className='totalComments'>
                                            <img className='num_com' src={cuadroTexto} alt="Cuadro de dialogo" />
                                            <p>{data.mensajes}</p>
                                        </div>
                                        <div>
                                            <div className='title'>
                                                <p>{data.titulo_hilo}</p>
                                            </div>
                                            <div className='userName'>
                                                <p>{data.nombre}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                    })
                    :
                    <div className='ceroMessagesBox'><img className='sinMensajes' src={ceroMensajes} /> <br /> <h4 className='noMessages'>Aún no hay mensajes. Prueba a escribir un mensaje para iniciar el hilo.</h4></div>}
            </section>
        </div>
    );
};

export default Topics;