import axios from 'axios';
import React, { useState } from 'react';
import './Register.css';
// import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import userLogin from '../../img/Saly-13.png';
import BtnLoad from '../BtnLoad';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';
import Login from './Login';
import CheckRegister from './CheckRegister';
import Loading from '../Loading';

const Register = () => {
    const [alert, setAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [msgErr, setMsgErr] = useState(false)
    const [login, setLogin] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [check, setCheck] = useState(false)

    // const navigate = useNavigate();

    const data = e => {
        e.preventDefault()
        setIsLoading(true)
        setMsgErr(false)
        setEmailErr(false)
        setAlert(false)

        let user = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value
        console.log(user, email, password);

        if (password !== confirmPassword) {
            setIsLoading(false)
            return setAlert(true)
        }

        axios.post("http://localhost/foro/foro/server/usuarios.php", { nombre: user, contraseña: password, email })
            
            .then(res => {
                setCheck(true)
                console.log('Registro exitoso')
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    
                    setIsLoading(false)
                    // if (error.response.data.mesage == 'El email ya esta en uso') {
                    //     setEmailErr(true)
                    //     console.log(error.response.data);
                    // }
                }, 2000);
                
            });
    }

    if (check) {
        return <CheckRegister />
    }

    if (login) {
        return (<Login />)
    }

    return (
        <div className='background'>
            <div className='contain'>
                <div className='contain2'>
                    <div className='minicontain'>
                        <img src={userLogin} />
                    </div>
                    <div className='inicio'>

                        {isLoading ? <Loading /> : <>{msgErr && <div className='msg_error'>Datos incorrectos</div>}

                            <h1>Sé parte de la comunidad <span className='welcome'>Soziali</span></h1>
                            <div className='content-form'>
                                <form onSubmit={data} >
                                    <h3>Registrate</h3>
                                    <div>
                                        <input className='inputInicio' type="text" name="username" placeholder='Nombre de usuario' required></input>
                                    </div>
                                    <div>
                                        <input 
                                            className={emailErr ? 'marginInput error-email' : 'inputInicio'} 
                                            type="email" 
                                            name="email" 
                                            placeholder='Email' 
                                            required>
                                        </input>
                                        {emailErr && <p className='msg-error'>Email ya esta en uso</p>}
                                    </div>
                                    <div>
                                        <input
                                            className={alert ? 'inputInicio error' : 'inputInicio'}
                                            type="password"
                                            name="password"
                                            placeholder='Contraseña'
                                            required>
                                        </input>
                                        {alert && <p className='msg-error'>Las contraseñas no coinciden</p>}
                                    </div>
                                    <div>
                                        <label></label>
                                        <input 
                                            className={alert ? 'inputInicio error' : 'inputInicio'} 
                                            type="password" 
                                            name='confirmPassword' 
                                            placeholder='Confirma contraseña' 
                                            required />
                                        {alert && <p className='msg-error'>Las contraseñas no coinciden</p>}
                                    </div>
                                    <div className='registrate'>
                                        <p>¿Ya estás registrado?<a className='registrar' href='/registro'> Inicia sesión</a></p>
                                    </div>
                                    <div className='form-button'>
                                        <button>{isLoading ?
                                            <BtnLoad />
                                            :
                                            "Regístrate"
                                        }
                                        </button>
                                    </div>
                                </form>                               
                            </div></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;