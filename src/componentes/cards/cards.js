import './cards.css';

const Cards = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='cards-estrutura'>

            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'> 
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
};

export default Cards;