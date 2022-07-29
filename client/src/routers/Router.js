import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Index/Home';
import Topics from '../components/Index/Topics';
import Hilos from '../components/Index/Hilos';
import Login from '../components/Login/Login';
import Messages from '../components/Index/Messages';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/temas' element={<Topics/>} />
                <Route path='/hilos/:id' element={<Hilos />} />
                <Route path='/mensajes/:id' element={<Messages />} />
                <Route path='*' element={<h1>Error 404</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;