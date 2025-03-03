
import React from "react";

import '../style/styleCard.css'
function Carte(){
        
        return(
                <>
<div className="container mt-5 scroll" data-aos="fade-in">
  <div className="row align-items-center">
    <div className="col-12 col-md-5">
      <div className="card mt-5  ABC">
        <img src="image/Outils.jpg" alt="John" className="img-fluid" />
      </div>
    </div>

    <div className="col-12 col-md-5 texte-left mt-5">
      <div className="doctors">
        <div className="doctor-name">Dr. Tuncay SAHIN 
<i className="fas fa-tooth ms-2"></i>
</div>
      </div>
      <hr className="me-5" style={{ width: "100%", maxWidth: "400px", margin: "auto" }} />
      <div className="cabinet-name">CABINET D'ORTHODONTIE ET STOMATOLOGIE</div>
     
      <p className="text pt-2">"Un beau sourire ne rend pas seulement un visage lumineux.<br /> Il témoigne aussi d'une bonne santé dentaire, grâce aux soins de l'orthodontie et de la stomatologie."</p>
    </div>
  </div>
</div>


       
                
                </>

        )



}
export default Carte;