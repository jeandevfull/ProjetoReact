import React from "react";
import './styles.css';
import Logo from '../../assets/logotrans.png';

function Footer() {
    return(  
             <footer>
                <img src={Logo} id="logo" />
                <span>Todos Os Direitos Reservados © <br/>
                      Desenvolvido Por: Jean Pedro
                </span>
             </footer>
    )
}

export default Footer;