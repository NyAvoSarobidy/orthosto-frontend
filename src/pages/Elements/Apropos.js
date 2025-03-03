import React from "react";
import '../style/styleApropos.css'

function Apropos(){

        return(
            <div id="Apropos" className="mt-5 pb-5" style={{ paddingTop : "50px" }}>
                 <div className="container " >
                 <div className="row align-items-center">
            <h2 className="title text-center text-danger">ORTHODONTISTE MULHOUSE</h2>
              {/* Colonne gauche : Texte */}
              
              <div className="col-md-6">         
                <p className="text">
                  <strong className="fw-bold">TRAITEMENTS EN ORTHODONTIE ET STOMATOLOGIE A MULHOUSE</strong><br />
                  Vous avez toujours rêvé d’un beau sourire ?<br />
                  Lors du bilan bucco-dentaire de votre enfant, votre chirurgien-dentiste vous a conseillé de consulter un orthodontiste ? Vos dents de sagesse vous font terriblement mal ?<br />
                  Nos praticiens, médecins spécialistes en orthodontie et stomatologie vous accueillent dans leur cabinet à Mulhouse.<br />
                  Nous proposons des traitements d'orthodontie classique ou invisible (par aligneurs esthétiques) selon vos besoins. Grâce à une approche personnalisée, nous élaborons des traitements adaptés à vos besoins. Ayant à notre disposition tous les moyens thérapeutiques modernes, les enfants et les adultes pourront bénéficier des techniques orthodontiques les plus performantes, 
                  les plus confortables et les plus discrètes.
                </p>
              </div>
          
              {/* Colonne droite : Image */}
              <div className="col-md-6 d-flex flex-column gap-3" >
               
                <img 
                    src="/image/images.jpeg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded ms-5 mt-2"
                    style={{ maxWidth: "50%", height: "auto" }}
                />
                <img 
                    src="/image/image.png" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded ms-auto mb-2"
                    style={{ maxWidth: "40%", height: "auto" }}
                /> 
                </div>
                 </div>
                 </div>
          
            </div>
        )
}
export default Apropos;


