import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCounterGlobal } from '../store/slices/counter.slice';

const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector( state => state.counter)
    const incrementCounter = () => dispatch(increment())
    const decrementCounter = () => dispatch(decrement())
    const setCounter = (set) => dispatch(setCounterGlobal(set))

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={decrementCounter}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>
            <button onClick={incrementCounter} >+</button>

        </div>
    );
};

export default Counter;