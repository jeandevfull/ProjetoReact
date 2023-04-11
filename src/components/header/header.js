import React, { useContext, useRef }  from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import Imagen from '../../assets/logoo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserContext } from "../../context/context";

function Header(){
   const {comprar,setComprar} = useContext(UserContext);
   const navRef = useRef();
   const showNavbar = () =>{
    navRef.current.classList.toggle('responsive_nav')
   }

   const navigate = useNavigate()

    return(
        <>
        <header>
            <img className="image" src={Imagen}/>
             <nav ref={navRef}>
                <ul>
                    <li onClick={() =>navigate('/')}>Home</li>
                    <li onClick={() =>navigate('contatos')}>Contato</li>
                    <li onClick={() =>navigate('fotos')}>Fotos</li>
                    <li onClick={() => navigate('comentarios')}>{comprar ? 'Ingressos' : 'Comentarios'}</li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                   <FaTimes/>
                </button>
             </nav>
             <button className="nav-btn " onClick={showNavbar}>
                <FaBars/>
             </button>
        </header>
      </>
    )
}


export default Header;