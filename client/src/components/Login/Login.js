import axios from 'axios';
import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';
import '../../styles/Login.css'
import Register from './Register';
import foro from '../../img/foro.JPG';

const Login = () => {

   const [ register, setRegister ] = useState(false)

  const data = (e) => {
  e.preventDefault()
  
  let email = e.target.email.value
  let password = e.target.password.value
  axios.post("http://localhost/php/Prueba_Api/login.php",{email,
  contraseña:password})
  .then(res => console.log(res))
  .catch(error =>console.log(error));
}

if (register) {
    return( <Register/> )
}

  return (
    
    <div id='formBox'>
      <img className='foro' src={foro}/>

      <form onSubmit={data} className="form">
        <div className="mb-3">
          <label htmlFor='email' className="form-label"></label>
          <input className="form-control marginT" type="email"  name="" id="email" aria-describedby="helpId" placeholder="Email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label"></label>
          <input className="form-control marginB" type="password"  name="" id="password" aria-describedby="helpId" placeholder="Password"/>
        </div>

        <MainButtons mainbutton={"Enviar"}/>
      
      </form>
      <button onClick={() => setRegister(true)} >Registrarse</button>
    </div>
);

};

        export default Login;