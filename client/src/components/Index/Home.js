import axios from 'axios';
import React, {useState, useEffect} from "react";


const Home = () => {

    const [ temas , setTemas ] = useState("Prueba")

    useEffect(() => {
        axios.get("http://localhost/php/App_foro/foro/server/temas.php")
        .then(res =>setTemas(res.data))
        .catch(error =>console.log(error))
    }, [])

   
    return (
        <div>
            <section className='header'>
                <h1>Encuentra un tema del que hablar</h1>
            </section>
            <section>
                <div className='topic' id={ temas[0].id }>
                    <img></img>
                    <h2>{ temas[0].temas }</h2>
                </div>
                <div className='topic' id={ temas[1].id }>
                    <img></img>
                    <h2>{ temas[1].temas }</h2>
                </div>
                <div className='topic' id={ temas[2].id }>
                    <img></img>
                    <h2>{ temas[2].temas }</h2>
                </div>
                <div className='topic'id={ temas[3].id }>
                    <img></img>
                    <h2>{ temas[3].temas }</h2>
                </div>
                <div className='topic' id={ temas[4].id }>
                    <img></img>
                    <h2>{ temas[4].temas }</h2>
                </div>
                <div className='topic' id={ temas[5].id }>
                    <img></img>
                    <h2>{ temas[5].temas }</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;