import axios from 'axios';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './home.css'
import { useSelector } from 'react-redux';
import Loading from '../Loading';

import maletin from '../../img/maletin.jfif'
import dolar from '../../img/dolar.jfif'
import ocio from '../../img/ocio.jfif'
import relaciones from '../../img/person.jfif'
import pesas from '../../img/pesas.jfif'
import viajes from '../../img/viajes.jfif'
import user from '../../img/user.png'





const Home = () => {

    const isUser = localStorage.getItem("id")
    const userName =  localStorage.getItem("nombre")


    const isLoading = useSelector(state => state.isLoading)

    const [ temas , setTemas ] = useState([])
    const main = document.getElementById('id');
    useEffect(() => {
        axios.get("http://localhost/foro/foro/server/temas.php")
        .then(res => setTemas(res.data))
        .catch(error =>console.log(error))
    }, [])

    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <section className='header'>             
                <h1>Encuentra un tema del que hablar</h1>
                <div className='userSesion'>
                {isUser ? <h4>{userName}</h4> : <h4><Link to = "/login">Iniciar sesión/ Registrarse</Link></h4>}
                <img src={user} alt="iniciar sesión"/>
                </div>
            </section>
            <section id="prueba">
                {temas.map(data => {
                    return (<div className='topic' key={data.id}>
                        <img src={ data.URL } alt="maletin"/>
                        <h2>{ data.temas }</h2>
                    </div>)
                })}
            </section>
            <footer>
                <p>¿No encuentras tu tema? <a href="">Escríbenos</a></p>
            </footer>
        </div>
    );
};

export default Home;