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
    const [userReg, setUserReg] = useState("")
    const [email, setEmail] = useState("")
    const [userErr, setUserErr] = useState(false);
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const URL = process.env.REACT_APP_URL_API
    // const navigate = useNavigate();

    const data = e => {
        e.preventDefault()
        setIsLoading(true)
        setMsgErr(false)
        setEmailErr(false)
        setAlert(false)
        setUserErr(false)

        let confirmPassword = e.target.confirmPassword.value


        if (password !== confirmPassword) {
            setIsLoading(false)
            return setAlert(true)
        }

        axios.post(`${URL}/usuarios.php`, { nombre: userReg, password, email })
            .then(res => {
                setCheck(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
                console.log('Registro exitoso')
                console.log(res.data)
                setNombre(res.data.nombre)
            })
            .catch(error => {
                console.log(error);
                const { code } = error.response.data
                switch (code) {
                    case  "5":
                        setUserErr(true)
                        break;
                    case  "10":
                        setEmailErr(true)
                        break;
                    case  "15":
                        setUserErr(true)
                        setEmailErr(true)
                        break;
                }
                setTimeout(() => {

                    setIsLoading(false)
                    // if (error.response.data.mesage == 'El email ya esta en uso') {
                    //     setEmailErr(true)
                    //     console.log(error.response.data);
                    // }
                }, 2000);

            });
    }

    return (
        <div className='background'>
            <div className='contain-register'>
                <div className='contain2-register'>
                    <div className='minicontain2'>
                        <img src={userLogin} />
                    </div>
                    <div className='inicio2'>

                        {isLoading ? <Loading /> : <>
                            {check ? <CheckRegister nombre={nombre}/> : <><h1>Sé parte de la comunidad <span className='welcome'>Soziali</span></h1>
                            <div className='content-form'>
                                <form onSubmit={data} >
                                    <h3>Registrate</h3>
                                    <div>
                                        <input 
                                            className={userErr ? 'inputInicio error' : 'inputInicio'} 
                                            type="text" 
                                            name="username" 
                                            placeholder='Nombre de usuario' 
                                            onChange={e => setUserReg(e.target.value)}
                                            required
                                            value={userReg}
                                            >
                                        </input>
                                        {userErr && <p className='msg-error'>El usuario ya esta en uso</p>}
                                    </div>
                                    <div>
                                        <input 
                                            className={emailErr ? 'inputInicio error' : 'inputInicio'} 
                                            type="email" 
                                            name="email" 
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder='Email' 
                                            value={email}
                                            required>
                                        </input>
                                        {emailErr && <p className='msg-error'>Email ya esta en uso</p>}
                                    </div>
                                    <div>
                                        <input
                                            className={alert ? 'inputInicio error' : 'inputInicio'}
                                            type="password"
                                            name="password"
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder='Contraseña'
                                            value={password}
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
                                        <p>¿Ya estás registrado?<a className='registrar' href='/login'> Inicia sesión</a></p>
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
                            </>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;