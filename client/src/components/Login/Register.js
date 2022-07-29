import axios from 'axios';
import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';
import Login from './Login';

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
            <form onSubmit={data}>
                <div>
                    <label>Username</label>
                    <input type="text"  name='username'/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name='email'/>
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type="password"  name='password'/>
                </div>

                <div>
                    <label>Confirma contraseña</label>
                    <input type="password"  name='confirmPassword'/>
                </div>
                <MainButtons mainbutton='Regístrate'/>
            </form> 
            <button onClick={() => setLogin(true)}>Volver</button>
        </div>
    );
};

export default Register;