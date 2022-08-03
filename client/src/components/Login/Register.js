import axios from 'axios';
import React, { useState } from 'react';
import Login from './Login';
import foro from '../../img/foro.JPG';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [ alert, setAlert ] = useState(false)
    const [ isLoading, setIsLoading] = useState(false)
    const [ msgErr, setMsgErr ] = useState(false)
    const [login, setLogin] = useState(false)

    const navigate = useNavigate();

    const data = e => {
        e.preventDefault()
        setIsLoading(true)
        setMsgErr(false)

        let user = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value

        if (password !== confirmPassword) {
            setAlert(true)
            // return console.log("las contraseñas no coinciden");
        }
        axios.post("http://localhost/foro/server/usuarios.php",{user, password,email})
        .then(res => {
            navigate('/login')
            console.log(res)})
        .catch(error =>{ 
            setTimeout(() => {
                setMsgErr(true)
                setIsLoading(false)
              }, 2000);    
              console.log(error)});
    }
    
    //cuando se redireccione a login mostrar un mensaje de color verde que le diga que el registro a ido bien 
    //falta un if que compare si el correo o el nombre de usuario ya están registrados

    if(login){
        return (<Login />)
    }

    return (
        <div>
            { alert && <h1 className='msg_error'>Las contraseñas no coinciden</h1> }
            { msgErr && <div className='msg_error'>No se ha podido registrar este usuario </div> }
        
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
                        <input className='marginInput marginB' type="password"  name='confirmPassword' placeholder='Confirma contraseña'/>
                    </div>
<<<<<<< HEAD
                    <div>
                    <button className='button-default'>Registrarse</button>
                    </div>
                    
=======
                    <button className='button-red'>{ isLoading ? 
                        <div class="lds-ellipsis">
                         <div></div><div></div><div></div><div></div>
                        </div> :
                        "Regístrate"
                    }
                    </button> 

>>>>>>> 0b899b35bb91865d51e9da449c0b944430ab9833
                </form> 
                <button id="volver"  className='button-white' onClick={() => setLogin(true)}>Volver</button>
            </div>
        </div>
    );
};

export default Register;