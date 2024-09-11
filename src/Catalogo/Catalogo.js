import '../App.css';
import Meucard from '../card/card';
import { useEffect, useState } from 'react'; 
import { listarCatalogo } from '../API/api'; 

function NovosJogos() {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    listarCatalogo().then((dados) => {
      setCatalogo(dados);
    });
  }, []);

  return (
    <div className="card-container"> 
      {catalogo.map((jogo, i) => (
        <Meucard 
          key={i} 
          capa={jogo.urlCapa}
          titulo={jogo.nome}
          desenvolvedora={jogo.desenvolvedora}
        />
      ))}
    </div>
  );
}

export default NovosJogos;