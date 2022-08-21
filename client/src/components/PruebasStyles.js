import React from 'react';
import './pruebasStyles.css'

const PruebasStyles = () => {
    return (
        <div className='general-content2'>
            <div className='topic'>
                <h1>Empleo y emprendimiento</h1>
                <button>Comenta</button>
            </div>  
            <div>
                <table className="table">
                    <thead>
                        <tr className='titles'>
                            <th className='topics-table'>Hilos</th>
                            <th className='title-table' id="users-table">Usuarios</th>
                            <th className='title-table' id="comments-table">Respuestas</th>
                            <th className='title-table' id="date-table">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='titles-data'>
                            <td className='topics-table'>Current news and discussion</td>
                            <td className='data users-table-data'><span className='user-icon'>B</span><span className='user-iconA'>F</span><span className='user-iconB'>C</span></td>
                            <td className='data comments-table-data'>66</td>
                            <td className='data'><div className='comments-table-data-hidden'><span>66</span><br></br></div>21/08/2022</td>
                        </tr>
                        <tr className='titles-data'>
                            <td className='topics-table'>Spoiler Alert</td>
                            <td className='data users-table-data'><span className='user-icon'>A</span><span className='user-iconC'>w</span></td>
                            <td className='data comments-table-data'>66</td>
                            <td className='data'><div className='comments-table-data-hidden'><span>66</span><br></br></div>21/08/2022</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default PruebasStyles;
