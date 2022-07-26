import React from 'react';
import MainButtons from '../Buttons/MainButtons';

const Register = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlfor>Username</label>
                    <input type="text" id='username' name='username'/>
                </div>

                <div>
                    <label htmlfor>Email</label>
                    <input type="email" id='email' name='email'/>
                </div>

                <div>
                    <label htmlfor>Contraseña</label>
                    <input type="password" id='password' name='password'/>
                </div>

                <div>
                    <label htmlfor>Confirma contraseña</label>
                    <input type="password" id='password' name='password'/>
                </div>
                <MainButtons mainbutton='Regístrate'/>
            </form> 
        </div>
    );
};

export default Register;