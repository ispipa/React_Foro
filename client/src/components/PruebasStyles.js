import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import './pruebasStyles.css'
import empleo from '../img/empleo.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { setLoadingGlobal } from '../store/slices/isLoading.slice';

const PruebasStyles = () => {

    const dispatch = useDispatch()

    const isLoading = useSelector(state => (state.isLoading));
    const [temas, setTemas] = useState([]);
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const [prueba, setPrueba] = useState(true) 

    useEffect(() => {
        setLoadGlobal(true)
        axios.get("http://localhost/foro/foro/server/temas.php")
            .then(res => {
                setTemas(res.data)
                setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);
            })
            .catch(error => console.log(error))
    }, [])

    

    return (
        isLoading ? <Loading/>
        :
        <div className='general-content'>
            <div className='containerCards'>
                {temas.map(data => {
                    return (<Link to={`/temas/${data.temas}/${data.id}`} key={data.id}>
                        <div className='card'>
                            <div>
                                <img src={data.URL} />
                            </div>
                            <h2>{data.temas}</h2>
                        </div></Link>)
                })}
            </div>
        </div>
    );
};

export default PruebasStyles;