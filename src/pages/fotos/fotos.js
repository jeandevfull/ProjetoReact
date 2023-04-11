import React from "react";
import './styles.css'
import Header from "../../components/header/header";




function Fotos() {
    return(
      <>
       <Header/>
       <h2 className="title">Veja algumas fotos do filme</h2>  
         <div class="actor-cards-container">
            <div class="cards-contente">
                  <div class="cards banner-1-1"></div>
                  <div class="cards banner-2-2"></div>
                  <div class="cards banner-3-3"></div>
                  <div class="cards banner-4"></div>
                  <div class="cards banner-5"></div>
                  <div class="cards banner-6"></div>
                  <div class="cards banner-7"></div>
                  <div class="cards banner-8"></div>
            </div>
         </div>
       </>

    )
}

export default Fotos;
