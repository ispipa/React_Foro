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

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Home/>} /> */}
                <Route path='/login' element={<Login/>} />
                {/* <Route path='/temas/:tema/:id' element={<Topics />} /> */}
                <Route path='/hilos/:id' element={<Hilos/>} />
                <Route path='/mensajes' element={<Messages />} />
                <Route path='/perfil' element={<Perfil/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route element={<Nav/>}>
                    <Route path='/' element={<PruebasStyles/>}></Route>
                    <Route path='/temas/:tema/:id' element={<Topics />}/>
                </Route>
                {/* <Route path='*' element={<h1>Error 404</h1>} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;