import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import './messages.css';
import './messagesHilos.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingGlobal } from '../../store/slices/isLoading.slice';
import TextEditor from '../TextEditor';
import Loading from '../Loading';


const MessagesHilos= () => {

    const isUser = localStorage.getItem("id")
    const [description, setDescription] = useState("")
    const { hilo } = useParams()
    const dispatch = useDispatch()
    const setLoadGlobal = (state) => dispatch(setLoadingGlobal(state))
    const isLoading = useSelector(state => state.isLoading)
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_URL_API


    useEffect(() => {
        axios.get(`${URL}/temas.php`)
            .then(res => {
                console.log(hilo)
            })
            .catch(error => console.log(error))
    }, [])

    const dataForm = (e) => {
        e.preventDefault()

        const {  texto_mensaje, id_usuario, id_hilo } = {

            texto_mensaje: description,
            id_usuario: isUser,
            id_hilo: hilo
        }
        console.log(texto_mensaje)

        axios.post(`${URL}/mensajes.php`, {  texto_mensaje, id_usuario, id_hilo })
            .then(res => {
                console.log(res.data)
                const { nombre } = res.data.result[0];
                setLoadGlobal(true)
                setTimeout(() => {
                   navigate(`/hilos/${hilo}/${nombre}`)
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
                <form onSubmit={dataForm} className="form-comentar">
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
                <p className="form-comentar-p">Una vez que envíes el mensaje, no podrás editarlo o eliminarlo.</p>
            </section>

        </div>
    );
};

export default MessagesHilos;