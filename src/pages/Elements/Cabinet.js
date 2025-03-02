import React from "react";
import '../style/styleTechnologie.css'
function Techno(){
    return(
      
        <div className="container mt-5">
              <div className="row align-items-center">
          
              <h5 className="title text-center">Cabinet d'orthodontie</h5>
              <div className="col-md-5 text-center">         
             
                <p className="text">
                  <strong className="fw-bold">Pour toute la famille</strong><br />
                </p>
             
               <div className="row row-cols-1 g-4"> {/* `row-cols-1` pour une seule colonne par ligne sur tous les écrans */}
    {/* Carte pour Enfants */}
    <div className="col img-zoom card-animation">
        <div className="card shadow-sm text-dark">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <i className="fas fa-child me-3 fs-2 eto"></i>
                    <a className="text-decoration-none text-dark fw-bold m-0">ORTHODONITE POUR ENFANTS</a>
                </div>
            </div>
        </div>
    </div>

    {/* Carte pour Adolescents */}
    <div className="col img-zoom card-animation">
        <div className="card shadow-sm text-dark">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <i className="fas fa-user-graduate me-3 fs-2 eto"></i>
                    <a className="text-decoration-none text-dark fw-bold m-0">ORTHODONITE POUR ADOLESCENTS</a>
                </div>
            </div>
        </div>
    </div>

    {/* Carte pour Adultes */}
    <div className="col img-zoom card-animation">
        <div className="card shadow-sm text-dark">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <i className="fas fa-user-tie me-3 fs-2 eto"></i>
                    <a className="text-decoration-none text-dark fw-bold m-0">ORTHODONITE POUR ADULTES</a>
                </div>
            </div>
        </div>
    </div>
                </div>
              </div>
              <div className="col-md-6 mt-5 text-center" >
              <img 
                    src="/image/Font.jpg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded ms-5 mt-5"
                    style={{ maxWidth: "80%", height: "auto" }}
                />
            </div>
            </div>
        </div>
     
       
    )

}
export default Techno;