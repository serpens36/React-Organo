import { useState } from 'react';
import Botao from '../botao/botao.js';
import Lista from '../lista-suspensa/lista.js';
import AreaTexto from '../texto-form/texto-form.js';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setImagem('');
        setCargo('');
        setTime('');
    };

    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>

                <h2> Preencha os dados para criar o card do colaborador </h2>

                <AreaTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}/>

                <AreaTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}/>

                <AreaTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)}/>

                <Lista 
                label="Time" 
                itens = {props.times} 
                valor={time} 
                aoAlterado={valor => setTime(valor)}/>

                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    );
};

export default Formulario;