import React from "react";
import './styles.css';
import image from '../../assets/contact.png';
import Header from "../../components/header/header";





function Contato() {


    return(
      <>
        <Header/>
         <div className="contacts-content">
          <img src={image} className="image-contact"/>
            <form>
              <h1>ENTRE EM CONTATO</h1>
                <label>
                  E-mail:
                  <input type="email" name="email"></input>
                </label>
                <label>
                  Nome:
                  <input type="text" name="nome"></input>
                </label>
                <label>
                  Telefone:
                  <input type="text" name="fone"></input>
                </label>
                <label>
                  Mensagem:
                  <textarea name="message"></textarea>
                </label>
                <button className="send" type="submit">Enviar</button>
            </form>
            </div>
      </>
    )
}

export default Contato;
