import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './messages.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';

import globo from '../../img/globo.jfif'
import TextEditor from '../TextEditor';
import Loading from '../Loading';


const Messages = () => {
    const isUser = localStorage.getItem("id")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const isLoading = useSelector(state => state.isLoading)
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL_API
    const [temas, setTemas] = useState([])

    useEffect(() => {
        axios.get(`${URL}/temas.php`)
            .then(res => {
                console.log(res.data)
                setTemas(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const dataForm = (e) => {
        e.preventDefault()

        const { titulo_hilo, descripcion_hilo, fecha_creacion, id_usuario, id_temas } = {
            titulo_hilo: e.target.title.value,
            descripcion_hilo: description,
            fecha_creacion: new Date().toLocaleDateString("en-CA"),
            id_usuario: isUser,
            id_temas: e.target.tema_select.value
        }

        axios.post(`${URL}/hilos.php`, { titulo_hilo, descripcion_hilo, fecha_creacion, id_usuario, id_temas })
            .then(res => {
                console.log(res.data)
                const { id_tema, temas } = res.data.result.usuarioId;
                setLoadGlobal(true)
                setTimeout(() => {
                    navigate(`/temas/${temas}/${id_tema}`)
                }, 2000);
            })
            .catch(error => console.log(error))
    }

    if (isLoading) {
        return <Loading />
    }

    if (!isUser) {
        return <Navigate to="/login"></Navigate>

    }

    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>Deja tu mensaje</h1>
            </div>
            <section className='formulario'>
                <form onSubmit={dataForm}>
                    <label>Título:</label>
                    <input type="text" name='title' id='title'></input><br />
                    <label>Tema:</label>
                    <select name="tema_select" id="temas">
                        {temas.map(data => {
                            return (
                                <option value={data.id}>{data.temas}</option>
                            )
                        })}

                    </select>
                    <div>
                        <div className='editor'><TextEditor /></div>
                        <CKEditor
                            editor={Editor}
                            data="<p>Escribe aquí tu mensaje</p>"
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log('Escribe', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                // console.log({ event, editor, data });
                                // console.log(editor.getData())
                            }}
                            onBlur={(event, editor) => {
                                // console.log('Blur.', editor);
                                setDescription(editor.getData());
                            }}
                            onFocus={(event, editor) => {
                                // console.log('Focus.', editor);
                                // console.log(editor.getData())
                            }}
                        />
                    </div>

                    <div id="btn_dir">
                        <button>ENVIAR</button>
                    </div>

                </form>
                <p>Una vez que envíes el mensaje, no podrás editarlo o eliminarlo.</p>
            </section>

        </div>
    );
};

export default Messages;