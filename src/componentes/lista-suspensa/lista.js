import './lista.css'

const Lista = (props) => {
    return (
        <div className='lista'>
            <label> {props.label} </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=""> </option>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
};

export default Lista;