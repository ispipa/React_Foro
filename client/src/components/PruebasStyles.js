import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import './pruebasStyles.css'
import empleo from '../img/empleo.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PruebasStyles = () => {

    const [temas, setTemas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/foro/foro/server/temas.php")
            .then(res => {
                setTemas(res.data)
            })
            .catch(error => console.log(error))
    }, [])
    console.log(temas);

    return (
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