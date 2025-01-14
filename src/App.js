import { useState } from 'react';
import Banner from './componentes/banner/banner.js';
import Formulario from './componentes/formulario/formulario.js';
import Time from './componentes/Time/Time.js';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Dev Ops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, }]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));

  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        aoCriarTime = {cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)
      }/>   
      {times.map(time => <Time mudarCor={mudarCorDoTime} key={time.nome} nome={time.nome} cor={time.cor} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}''
    </div>
  );
};

export default App;
