import "./card.css";
  
  export default function Meucard(Props){ 
    return (
       <div className="card">
            <div className="imagem">
                <img src= {Props.capa} />
            </div>
            <div className="descricao">
                <h3>{Props.titulo}</h3>
                <p>{Props.desenvolvedora}</p>
            </div>
       </div>

    );
    }
    