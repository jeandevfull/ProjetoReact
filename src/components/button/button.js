import react, { useContext, useState } from 'react'
import './style.css'
import { UserContext } from '../../context/context';

function Button(){
   
    const {comprar,setComprar} = useContext(UserContext);
    
    return(
         <div>
            <button className='button' onClick={() => setComprar(!comprar)}>{comprar ? 'Ingresso comprado' : 'Comprar ingresso'}</button>
         </div>
    )
}

export default Button;

