import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './messages.css';

import globo from '../../img/globo.jfif'

const Messages = () => 
{
    // const { id } =  useParams()
    // const [ temas , setTemas ] = useState("Prueba")
    // useEffect(() => {
    //     axios.get(`http://localhost/php/App_foro/foro/server/mensajes.php?id=${id}`)
    //     .then(res =>console.log(res))
    //     .catch(error =>console.log(error))
    // }, [])


    return (
        <div>
            <section className='header2'>
                <img src={globo} alt="globo de conversación" />
                <h1>Inicia tu hilo</h1>
            </section>
            <section className='formulario'>
                <form>
                    <label>Título:</label>
                    <input type="text" id='title'></input><br/>
                    <label>Tema:</label>
                    <select name="tema_select" id="temas">
                        <option value="value1">Empleo/Emprendimiento</option>
                        <option value="value2" selected>Finanzas</option>
                        <option value="value3">Salud y entrenamiento</option>
                        <option value="value4">Relaciones</option>
                        <option value="value5">Viajes</option>
                        <option value="value6">Ocio y videojuegos</option>
                    </select>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Escribe</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Escribe', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    />
                    <div id="btn_dir">
                        <button className='button-white'>ENVIAR</button>
                    </div>
                    
                </form>
                <p>Una vez que envíes el mensaje, no podrás editarlo o eliminarlo.</p>
            </section>

        </div>
    );
};

export default Messages;