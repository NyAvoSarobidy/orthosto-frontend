import React from "react"

import '../style/style.css'
function Techonologie (){

    return(
        <div id="techno" className=" mt-5">

<div className="container">

<div className="col-md-12">

<div className="row row-cols-1 g-4"> {/* `row-cols-1` pour une seule colonne par ligne sur tous les écrans */}
  
  <div className="col-md-12">
      <div className="card shadow-sm text-dark">
            <div className="card-header d-flex align-items-center justify-content-start" style={{backgroundColor: "#a1c5c5" }}>
                <i className="fas fa-robot me-3 fs-2 eto"></i>
                <h5 className="mb-0 text-white" >Nos technologies innovantes</h5>
        </div>
          <div className="card-body">
              <div className="d-flex align-items-center">
              <p className="text fw-bold">
                 
                  Nous investissons dans les dernières technologies orthodontiques pour vous garantir des traitements efficaces et confortables. De la radiographie numérique aux techniques d'imagerie 3D,
                   nous utilisons des outils de pointe pour évaluer et planifier vos soins avec précision.  </p> 
                  
              </div>
              <div className="service-container">
                <div className="service-item">
                    <h3>Aligneurs dentaires transparents</h3>
                </div>
                <div className="service-item">
                    <h3>Implants dentaires</h3>
                </div>
                <div className="service-item">
                    <h3>Radiologie 3D</h3>
                </div>
                <div className="service-item">
                    <h3>Empreintes numériques</h3>
                </div>
                </div>
                <div className="col-md-12 text-center" >
              <img 
                    src="/invisalign.jpg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded ms-5 mt-5"
                    style={{ maxWidth: "30%", height: "auto" }}
                />
            </div>
          </div>
      </div>
  </div>
  
              </div>
</div>


</div>
        </div>
    )
}
export default Techonologie