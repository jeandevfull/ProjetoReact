import React, { useContext } from "react";
import './styles.css';
import Imagenn from '../../assets/imagenn.jpg';
import Header from "../../components/header/header";
import { UserContext } from "../../context/context";




function Comentarios() {

    return(
       <div>
         <Header/>
         <h3>Comentarios</h3>
          <div className="conteudo">
           <img className="foto" src={Imagenn}/>
             <p className="comentario">Todas as reclamações, duvidas e sugestões sobre o site poderão
               ser respondidas por meio de:
               <span className="final">E-MAIL: jean.pedrooc@icloud.com
                     TELEFONE: 15 998537264
               </span>
             </p>
          </div>
       </div>

    )
}

export default Comentarios;
