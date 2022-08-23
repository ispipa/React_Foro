import React from 'react';
import { useSelector } from 'react-redux';

const Prueba = () => {

    const counter = useSelector( state => state.counter )

    return (
        <div>
            Este es otra cosa
            <h1>{counter}</h1>
        </div>
    );
};

export default Prueba;