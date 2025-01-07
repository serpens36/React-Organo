import { useState } from 'react';
import Botao from '../botao/botao.js';
import Lista from '../lista-suspensa/lista.js';
import Area from '../inserir/inserir.js';
import './formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

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

                <Area 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome..." 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}/>

                <Area 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo..." 
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)}/>

                <Area 
                label="Imagem" 
                placeholder="Informe o endereço da imagem..." 
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
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.aoCriarTime({nome: nomeTime, cor: corTime})
            }}>

                <h2> Preencha os dados para criar um novo time </h2>

                <Area 
                obrigatorio
                label="Nome" 
                placeholder="Digite o nome..." 
                valor={nomeTime} 
                aoAlterado={valor => setNomeTime(valor)}/>

                <Area 
                obrigatorio
                type="color"
                label="Cor" 
                placeholder="Digite a cor em hexadecimal..." 
                valor={corTime} 
                aoAlterado={valor => setCorTime(valor)}/>

                <Botao>
                    Criar Novo Time
                </Botao>
                
            </form>
        </section>
    );
};

export default Formulario;