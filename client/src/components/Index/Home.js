import React, { useEffect, useState } from 'react';
import './home.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';


const Home = () => { 

    const dispatch = useDispatch()

    const isLoading = useSelector(state => (state.isLoading));
    const [temas, setTemas] = useState([]);
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const [prueba, setPrueba] = useState(true)
    const URL = process.env.REACT_APP_URL_API
   

    useEffect(() => {
        setLoadGlobal(true)
        axios.get(`${URL}/temas.php`)
            .then(res => {
                setTemas(res.data)
                console.log(res.data)
                setTimeout(() => {
                    setLoadGlobal(false)
                }, 2000);
            })
            .catch(error => console.log(error))
    }, [])



    return (
        isLoading ? <Loading />
            :
            <div className='general-content'>
                <div className='containerCards'>
                    {temas.map(data => {
                        return (<Link to={`/temas/${data.temas}/${data.id}`} key={data.id}>
                            <div className='card'>
                                <div>
                                    <img src={data.img} />
                                </div>
                                <h2>{data.temas}</h2>
                            </div></Link>)
                    })}
                </div>
            </div>
    );
};

export default Home;