import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Index/Home';
import Topics from '../components/Index/Topics';
import Hilos from '../components/Index/Hilos';
import Login from '../components/Login/Login';
import Messages from '../components/Index/Messages';
import Perfil from '../components/Index/Perfil';
import Contacto from '../components/Index/Contacto.js';
import LoginNew from '../components/PruebasStyles';
import PruebasStyles from '../components/PruebasStyles';
import Nav from '../components/Nav';
import Register from '../components/Login/Register';

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/registro' element={<Register/>} />
                
                <Route element={<Nav/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/temas/:tema/:id' element={<Topics/>}/>
                    <Route path='/hilos/:id' element={<Hilos/>} />
                    <Route path='/temas' element={<PruebasStyles/>}/>
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/mensajes' element={<Messages />} />
                    <Route path='/perfil' element={<Perfil/>} />
                </Route>
                {/* <Route path='*' element={<h1>Error 404</h1>} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;