import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
import '../style/styleLocalisation.css'

function Localisation(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
         <div id="Localisation" className="Localisation mt-5 pb-3">
            <div  className="container pt-5">
            <h2 className="title text-center text-danger fs-bold">Localisation</h2>
            <p >
            Notre cabinet d'orthodontie et stomatologie situé au centre ville de Mulhouse vous accueille du lundi au vendredi sur rendez-vous.
            <br />Pour prendre RDV auprès d'un médecin orthodontiste, vous pouvez simplement utiliser notre service de prise de RDV sur internet.
             En cas d'urgence nous vous invitons à nous contacter par téléphone au 03 89 66 01 16.
                </p>
                <div className="row align-items-center">
      
              
              <div className="col-4 ">         
              <img 
                    src="/Bur/bur1.jpeg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded "
                    style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
          
              {/* Colonne droite : Image */}
              <div className="col-4 gap-3" >
              <img 
                    src="/Bur/bur2.jpeg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded "
                    style={{ maxWidth: "100%", height: "auto" }}
                />
             
                </div>
                <div className="col-4 gap-3" >
                <img 
                    src="/Bur/bur3.jpeg" 
                    alt="Orthodontiste"  
                    className="img-thumbnail rounded  "
                    style={{ maxWidth: "100%", height: "auto" }}
                />
             
                 </div>
                 </div>
                 <div className="row  align-items-center pt-4">
         
                    <div className="col col-md-auto me-auto ">
                    <Button 
                        onClick={handleShow} 
                        className="btn btn-warning w-100 text-white"
                    >
                        <i className="fas fa-map-marker-alt me-2"></i> VOIR MAP
                    </Button>
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                        <Modal.Title>Localisation sur la carte</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Iframe 
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.999999999999!2d7.340303!3d47.747484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919b2c483274f9%3A0x7c8ac7071bb21a4b!2sDr+Sahin+%26+Dr+Kaya!5e0!3m2!1sfr!2sfr!4v1633020000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                        />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    </div>
                </div>
            </div>
        </div>
        </>
       


    )
}
export default Localisation