
import React  from 'react';
import './style/stylebody.css'
import { Link } from "react-router-dom";
import Typical from 'react-typical';
function Body(){

  
    return(

        <section id="hero" className="hero section">
        <div className="container scroll-up" data-aos="fade-in">
          <div className="row gy-5 " data-aos="fade-in">
            <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              {/* <i className="fas fa-clinic-medical"></i> */}
              <h2 className="fw-bold" style={{ marginTop: "15px" }}>
                <Typical
                  steps={[
                    'Votre sourire est notre Priorité!', 2000,
                    'Nous prenons soin de vous.', 2000
                  ]}
                  wrapper="span"
                  loop={Infinity} // Boucle infinie pour une animation continue
                />
              </h2>
              <hr className="text-white me-auto" 
                  style={{ 
                    width: "100%", 
                    maxWidth: "300px", 
                    paddingBottom: "20px"
                  }} 
              />
              <p className='fw-bold'>Orthodontie et stomatologie pour les enfants, <br />les adolescents et les adultes.</p>
            </div>
        
          </div>
          <br />
          <div className="row">
            <div className="col-12 col-md-auto mb-2 mb-md-0">
              <Link to="" className="btn btn-danger w-100 fw-bold">
                <i className="fas fa-calendar-alt me-2"></i> PRENDRE RDV
              </Link>
            </div>
            <div className="col-12 col-md-auto">
              <Link to="" className="btn btn-primary w-100 fw-bold">
                <i className="fas fa-phone-alt me-2"></i> CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Body;