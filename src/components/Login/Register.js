import React, { useState } from 'react';
import MainButtons from '../Buttons/MainButtons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Register = () => {

    const [ alert, setAlert ] = useState(false)

    const data = e => {
        e.preventDefault()

        let username = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value

        if (password !== confirmPassword) {
            setAlert(true)
        
            console.log("las contraseñas no coinciden");
        }
        
    }

    return (
        <div>
            { alert && <h1>Las contraseñas no coinciden</h1> }
            
            <form onSubmit={data}>
                <div>
                    <label>Username</label>
                    <input type="text"  name='username'/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name='email'/>
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type="password"  name='password'/>
                </div>

                <div>
                    <label>Confirma contraseña</label>
                    <input type="password"  name='confirmPassword'/>
                </div>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
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
                <MainButtons mainbutton='Regístrate'/>
            </form> 
        </div>
    );
};

export default Register;