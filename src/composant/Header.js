
import React from 'react';
import './style/Header.css'

function Header(){
    return(
        <header className="header-top-custom border-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            {/* Partie gauche : Contacts téléphoniques et adresse */}
            <div className="col-12 col-md-6 d-flex flex-column align-items-start text-small">
              <div className="mb-1">
                <i className="fas fa-map-marker-alt me-1"></i>
                Cabinet d'<span className="text-success">orthodontie & stomatologie</span> à Mulhouse
              </div>
         
            </div>
      
            {/* Partie droite : Email et nom du docteur */}
            <div className="col-12 col-md-6 d-flex flex-column align-items-start align-items-md-end text-small">
              <div className="mb-1">
                <i className="fas fa-envelope me-1"></i> cabinet@orthosto.com
                <i className="fas fa-user-md me-1 ms-2"></i> Dr. Tuncay SAHIN
              </div>
            </div>
      
          </div>
        </div>
      </header>
      
      
      
      
    )
}

export default Header;