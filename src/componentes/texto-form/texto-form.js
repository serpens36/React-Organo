import { useState } from 'react';
import './texto-form.css';

const AreaTexto = (props) => {

   // let valor = '';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className='campo-texto'>
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    );
};

export default AreaTexto;