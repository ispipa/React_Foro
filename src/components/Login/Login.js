import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';
import '../Login/Login.css'

const Login = () => {
  const user = {
    "email" : "mariferrm97@hotmail.com",
    "password" : "1234"
  }

  const data = (e) => {
  e.preventDefault()
  
  let email = e.target.email.value
  let password = e.target.password.value

}

  return (
    <div id='formBox'>
      <form onSubmit={data} className="form">
        <div className="mb-3">
          <label htmlFor='email' className="form-label"></label>
          <input className="input" type="email" className="form-control" name="" id="email" aria-describedby="helpId" placeholder="Email"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label"></label>
          <input className="input" type="password" className="form-control" name="" id="password" aria-describedby="helpId" placeholder="Password"/>
        </div>

        <MainButtons mainbutton={"Enviar"}/>
      
      </form>
    </div>
);

};

        export default Login;