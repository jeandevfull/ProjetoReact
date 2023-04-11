import React from "react";
import Header from "../../components/header/header";
import './styles.css'; 
import video from "../../assets/trailer.mp4";
import Button from "../../components/button/button";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";



function Home() {

    return(
       <>
            <Header />
            <div id="banner"></div>
             <div id="trailer-container">
                <div className="content">
                  <video controls className="trailer">
                   <source src={video}/>
                   seu navegador nao possui suporte para vídeos 
                  </video>
                  <div className="sinopse">
                    <p className="description">
                        Após um contato não muito bem planejado, 
                        Scott Lang e Hope van Dyne são puxados para o Reino Quântico.
                        Além deles, Hank Pym, Janet van Dyne e Cassie Lang – respectivamente pais de Hope e filha de Scott – 
                        também são levadas para o desconhecido ambiente. Por lá, os heróis vão viver uma nova aventura e precisarão confrontar Kang, O Conquistador.
                    </p>   
                    <Button/>
                  </div>
                </div>
            </div>
            <Cards/>
            <Footer/>
       </>
    )
}

export default Home;
