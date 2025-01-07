import './inserir.css';

const Area = (props) => {

   // let valor = '';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className={`campo campo-${props.type}`}>
            <label> {props.label} </label>
            <input 
                type={props.type} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}/>
        </div>
    );
};

export default Area;