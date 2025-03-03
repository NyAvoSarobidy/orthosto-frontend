import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa"; // Icône de loupe de Font Awesome

import '../style/styleCabinet.css'
function Techno(){
    const [show, setShow] = useState(false);

    const handleShow = (e) => {
      e.stopPropagation(); // Empêche la propagation de l'événement
      setShow(true);
    };
  
    const handleClose = () => setShow(false);
    return(
      
        <div className="container mt-5">
              <div className="row align-items-center">
          
              <h5 className="title text-center text-danger">Cabinet d'orthodontie</h5>
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
       
       
              <div
        style={{ position: "relative", display: "inline-block" }}
        onClick={handleShow}
        role="button"
      >
        <img
          src="/image/Font.jpg"
          alt="Orthodontiste"
          className="img-thumbnail rounded ms-5 mt-5"
          style={{ maxWidth: "80%", height: "auto" }}
        />
        <div
          className="zoom-icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: 0, // Initialement invisible
          }}
        >
          <FaSearchPlus size={20} color="white" />
        </div>
      </div>

      {/* Modal en dehors du conteneur parent */}
      <Modal 
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      backdrop={true} // Active le fond de la modal
      backdropClassName="custom-backdrop" // Classe personnalisée pour le fond
      contentClassName="custom-modal-content" // Classe personnalisée pour le contenu
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="/image/Font.jpg"
            alt="Orthodontiste"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Modal.Body>
      
      </Modal>
    

            </div>
            </div>
        </div>
     
       
    )

}
export default Techno;