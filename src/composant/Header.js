
import React from 'react';
import './style/Header.css'

function Header(){
    return(
        <header className="header-top-custom border-bottom topbar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            {/* Partie gauche : Contacts téléphoniques et adresse */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start text-small">
            <p className="text-white pt-2">
              <strong> Site ORTHOSTO </strong>
            </p>
         
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-start text-small">
            <p className="text-white pt-2">
              <strong> ©Copyright 2025 Tous Droits Réservés</strong>
            </p>
         
            </div>
           
            <div className="col-12 col-md-3 d-flex flex-column align-items-start align-items-md-end text-small">
            <p className="text-white pt-2">
              Site réalisé par <strong>Ny Avo ANDRIATSILAVO</strong> 
            </p>
            </div>
          </div>
        </div>
      </header>
      
      
      
      
    )
}

export default Header;