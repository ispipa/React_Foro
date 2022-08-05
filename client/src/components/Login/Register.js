import axios from 'axios';
import React, { useState } from 'react';
import Login from './Login';
import foro from '../../img/foro.JPG';
import { useNavigate } from 'react-router-dom';
import CheckRegister from './CheckRegister';

const Register = () => {


    const [alert, setAlert] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [msgErr, setMsgErr] = useState(false)
    const [login, setLogin] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [check, setCheck] = useState(false)

    const navigate = useNavigate();

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

        if (password !== confirmPassword) {
            setIsLoading(false)
            return setAlert(true)
            // return console.log("las contraseñas no coinciden");
        }

        axios.post("http://localhost/foro/foro/server/usuarios.php", { nombre: user, contraseña: password, email })
            .then(res => {
                setCheck(true)
                console.log('Registro exitoso')
            })
            .catch(error => {
                setTimeout(() => {
                    setMsgErr(true)
                    setIsLoading(false)

                    if (error.response.data.mesage == 'El email ya esta en uso') {
                        setEmailErr(true)
                    }
                }, 2000);


                console.log(error.response.data.mesage)
            });
    }

    //cuando se redireccione a login mostrar un mensaje de color verde que le diga que el registro a ido bien 
    //falta un if que compare si el correo o el nombre de usuario ya están registrados

    if (check) {
        return <CheckRegister />
    }

    if (login) {
        return (<Login />)
    }

    return (
        <div>
            {alert && <h1 className='msg_error'>Las contraseñas no coinciden</h1>}
            {msgErr && <div className='msg_error'>No se ha podido registrar este usuario </div>}

            <div id='formBox'>
                <div className='container'>
                    <img className='foro' src={foro} />
                    <form onSubmit={data}>
                        <div>
                            <label></label>
                            <input className='marginInput marginT' type="text" name='username' placeholder='Username' />
                        </div>

                        <div>
                            <label></label>
                            <input className={emailErr ? 'marginInput error-email' : 'marginInput'}
                                type="email"
                                name='email'
                                placeholder='Email'
                            />
                            {emailErr && <p className='msg-error'>Email ya esta en uso</p>}
                        </div>

                        <div>
                            <label></label>
                            <input className='marginInput' type="password" name='password' placeholder='Contraseña' />
                        </div>

                        <div>
                            <label></label>
                            <input className='marginInput marginB' type="password" name='confirmPassword' placeholder='Confirma contraseña' />
                        </div>
                        <button className='button-red'>{isLoading ?
                            <div class="lds-ellipsis">
                                <div></div><div></div><div></div><div></div>
                            </div> :
                            "Regístrate"
                        }
                        </button>

                    </form>
                    <button id="volver" className='button-white' onClick={() => setLogin(true)}>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default Register;