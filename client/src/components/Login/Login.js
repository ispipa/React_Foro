import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'
import Register from './Register';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';

import userLogin from '../../img/Saly-13.png';
import BtnLoad from '../BtnLoad';

const Login = () => {

  const dispatch = useDispatch()

   const [ register, setRegister ] = useState(false)
   const isUser = localStorage.getItem("id")
   const [ isLoading, setIsLoading] = useState(false)
   const [ msgErr, setMsgErr ] = useState(false)
   const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))

   const navigate = useNavigate();

  const data = (e) => {
  e.preventDefault()
  setIsLoading(true)
  setMsgErr(false)
  
  let email = e.target.email.value
  let password = e.target.password.value
  axios.post("http://localhost/foro/foro/server/login.php",{email,
  contraseña:password})
  .then(res => {
    localStorage.setItem("id", res.data.id)
    localStorage.setItem("nombre", res.data.nombre)
    setLoadGlobal(true)
    setTimeout(() => {
      navigate('/')
      setLoadGlobal(false)
    }, 2000);    
    console.log(res)})
  .catch(error =>{
    setTimeout(() => {
      setMsgErr(true)
      setIsLoading(false)
    }, 2000);    
    console.log(error)});
}

if (register) {
    return( <Register /> )
}

if (isUser) {
  return <Navigate to="/"></Navigate>

} 

  return (
    <div className='background'>
            <div className='contain'>
                <div className='contain2'>
                    <div className='minicontain'>
                        <img src={userLogin} />
                    </div>
                    <div className='inicio'>

                        {msgErr && <div className='msg_error'>Datos incorrectos</div>}

                        <h1>Bienvenido a <span className='welcome'>Soziali</span></h1>
                        <div className='content-form'>
                            <form onSubmit={data} >
                                <h3>Inicia sesión</h3>
                                <div>
                                    <input className='inputInicio' type="email" id="email" placeholder='Email' required></input>
                                </div>
                                <div>
                                    <input className='inputInicio' type="password" id="password" placeholder='Contraseña' required></input>
                                </div>
                                <div className='registrate'>
                                    <p>¿No tienes cuenta?<a className='registrar' onClick={() => setRegister(true)}> Registrate</a></p>

                                </div>
                                <div className='form-button'>
                                    <button>{isLoading ?
                                        <BtnLoad /> 
                                        :
                                        "Iniciar sesión"
                                    }
                                    </button>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
);

};

        export default Login;