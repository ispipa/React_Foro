import axios from 'axios';
import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';
import Login from './Login';
import foro from '../../img/foro.JPG';

const Register = () => {

    const [ alert, setAlert ] = useState(false)
    const [ err , setErr ] = useState(false)
    const [ mesageError , setMesageError ] = useState("Prueba")
    const [login, setLogin] = useState(false)


    const data = e => {
        e.preventDefault()
        setErr(false)
        let username = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value

        if (password !== confirmPassword) {
            setAlert(true)
            return console.log("las contraseñas no coinciden");
        }
        axios.post("http://localhost/php/App_foro/foro/server/usuarios.php",{nombre:username,
        contraseña:password,
        email:email})
        .then(res => console.log(res))
        .catch(error =>{ 
            setMesageError(error.response.data.mesage)
            setErr(true) 
        });
    }

    if(login){
        return (<Login />)
    }

    return (
        <div>
            { alert && <h1>Las contraseñas no coinciden</h1> }
            { err && <h1>{ mesageError }</h1> }
        
            <div id='formBox'>
                <img className='foro' src={foro}/>
                <form onSubmit={data}>
                    <div>
                        <label></label>
                        <input className='marginInput marginT' type="text"  name='username' placeholder='Username'/>
                    </div>

                    <div>
                        <label></label>
                        <input className='marginInput' type="email" name='email' placeholder='Email'/>
                    </div>

                    <div>
                        <label></label>
                        <input className='marginInput' type="password"  name='password' placeholder='Contraseña'/>
                    </div>

                    <div>
                        <label></label>
                        <input className='marginInput' type="password"  name='confirmPassword' placeholder='Confirma contraseña'/>
                    </div>
                    <MainButtons mainbutton='Regístrate'/>
                </form> 
                <button id="volver" onClick={() => setLogin(true)}>Volver</button>
            </div>
        </div>
    );
};

export default Register;