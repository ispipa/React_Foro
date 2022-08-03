import axios from 'axios';
import React, { useState } from 'react';
import './Login.css'
import Register from './Register';
import foro from '../../img/foro.JPG';
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const [ register, setRegister ] = useState(false)
   const [ isLoading, setIsLoading] = useState(false)
   const [ msgErr, setMsgErr ] = useState(false)

   const navigate = useNavigate();

  const data = (e) => {
  e.preventDefault()
  setIsLoading(true)
  setMsgErr(false)
  
  let email = e.target.email.value
  let password = e.target.password.value
  axios.post("http://localhost/php/App_foro/foro/server/login.php",{email,
  contraseña:password})
  .then(res => {
    navigate('/')
    console.log(res)})
  .catch(error =>{
    setTimeout(() => {
      setMsgErr(true)
      setIsLoading(false)
    }, 2000);    
    console.log(error)});
}

if (register) {
    return( <Register/> )
}

  return (
    
    <div id='formBox'>

      { msgErr &&  <div>Datos incorrectos</div> }

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

        <button className='button-red'>{ isLoading ? 
         <div class="lds-ellipsis">
            <div></div><div></div><div></div><div></div>
          </div> :
          "Iniciar"
           }

        </button> 
         
      
      </form>
      <button className='button-white' onClick={() => setRegister(true)} >Registrarse</button>
    </div>
);

};

        export default Login;