import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='container-load'>
            <div class="lds-roller">
            <div></div><div></div><div></div><div></div><div>
            </div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;