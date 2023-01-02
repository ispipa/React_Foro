import React, {useEffect, useState} from 'react';
import './Perfil.css';

import imgPerfil from '../../img/imgPerfil.png'
import globo from '../../img/globo.jfif'
import {useDispatch, useSelector} from "react-redux";
import {Navigate } from "react-router-dom";
import {setLoadingGlobal} from "../../store/slices/isLoading.slice";
import axios from "axios";
import Loading from "../Loading";
import Nav from "../Nav";

const Perfil =  () => {

    const isUser = localStorage.getItem("id")
    const dispatch = useDispatch()
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const [isTopic, setTopic] = useState([{}])
    const [existTema, setExistTema] = useState(true)
    const isLoading = useSelector(state => state.isLoading)
    const URL = process.env.REACT_APP_URL_API
    const [userErr, setUserErr] = useState(false);

    const dataForm = (e) => {
        e.preventDefault()
        const formulario = document.querySelector('#formulario');
        const datosForm = new FormData(formulario);
        datosForm.append('modify','modify')
        datosForm.append('id',isUser)
        datosForm.append('email',isTopic.email)

       axios.post(`${URL}//usuarios.php`, datosForm)
            .then(res => {
                const { email, img, nombre } = res.data.result[0];
                localStorage.setItem("nombre", nombre)
                setLoadGlobal(true)
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            })
            .catch(error => {
                console.log(error);
                const { code } = error.response.data;
                console.log(code);
                if(code === "5"){
                    setUserErr(true)
                }
            })
    }

    useEffect(() => {
        setLoadGlobal(true)
        axios.get(`${URL}/usuarios.php?id=${isUser}`)
            .then( res => {
                const { nombre, email, img } =  res.data[0];
                 setTopic({nombre: nombre, email: email, img: img});
                console.log(res.data)
                setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);
                // console.log(res.data)
            })
    }, [])


    if (isLoading) {
        return <Loading/>
    }

    if (!isUser) {
        return <Navigate to="/login"></Navigate>

    }

    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>Editar perfil</h1>
            </div>
            {console.log(isTopic)}
            <section className='cuerpo'>
                { existTema ?
                    <>

                    {isTopic.img ? <span className='user-icon-perfil'><img src={isTopic.img}></img></span> : <span className='user-icon-perfil'>{isTopic.nombre}</span>}
                        <form onSubmit={dataForm} id="formulario">
                            <input type="file" id="image" name="img"></input><br/>
                            <input type="text" name="nombre" className={userErr ? 'input_perfil error' : 'input_perfil'}
                                   placeholder={isTopic.nombre}></input><br/>
                            {userErr && <p className='msg-error'>El usuario ya esta en uso</p>}
                            <input type="password" name="password" className='input_perfil' placeholder='*****'></input><br/>
                            <div className='btn_dir'>
                                <button>Guardar</button>
                            </div>
                        </form>
                    </>
                    : <></>}
            </section>
        </div>
    );
};

export default Perfil;