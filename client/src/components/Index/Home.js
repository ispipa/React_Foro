import axios from 'axios';
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './home.css'
import { useSelector } from 'react-redux';
import Loading from '../Loading';

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
                {isUser ? <h4><Link to = "/perfil">{userName}</Link></h4> : <h4><Link to = "/login">Iniciar sesión/ Registrarse</Link></h4>}
                <img src={user} alt="iniciar sesión"/>
                </div>
            </section>
            <section id="prueba">
                {temas.map(data => {
                    return (<Link to = {`/temas/${data.temas}/${data.id}`} key={data.id}><div className='topic' >
                        <img src={ data.URL } alt="maletin"/>
                        <h2>{ data.temas }</h2>
                        
                    </div></Link>)
                })}
            </section>
            <footer>
                <p>¿No encuentras tu tema? <Link to = "/contacto">Escríbenos</Link></p>
            </footer>
        </div>
    );
};

export default Home;