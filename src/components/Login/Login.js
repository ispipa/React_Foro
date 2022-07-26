import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';

const Login = () => {
  const[email, setEmail] = useState("")

  console.log(email);
  const data = (e) => {
  e.preventDefault()
  
}

  return (
    <div>
      <form onSubmit={data}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="" id="email" onChange={e => setEmail(e.target.value)} aria-describedby="helpId" placeholder=""/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" name="" id="password" aria-describedby="helpId" placeholder=""/>
        </div>

        <MainButtons mainbutton={"Enviar"}/>
      
      </form>
    </div>
);

};

        export default Login;