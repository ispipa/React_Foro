import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';

const Register = () => {

    const [ alert, setAlert ] = useState(false)

    const data = e => {
        e.preventDefault()

        let username = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value

        if (password !== confirmPassword) {
            setAlert(true)
        
            console.log("las contraseñas no coinciden");
        }
        
    }

    return (
        <div>
            { alert && <h1>Las contraseñas no coinciden</h1> }
            
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
        </div>
    );
};

export default Register;