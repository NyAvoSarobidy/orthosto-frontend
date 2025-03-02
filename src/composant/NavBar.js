
import React from 'react';
import "./style/NavBar.css"
import Header from './Header'
import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <>
         <Header />
     <nav className="navbar navbar-expand-lg navbar-light shadow-sm ">
      <div className="container ">
        <a className="navbar-brand text-white fw-bold" href="#">    
          ORTHOSTO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-home me-2"></i> Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-tooth me-2"></i> Orthodonte
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
          
              <i className="fas fa-heart me-2"></i> Stomalogie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-calendar-check me-2"></i> Prendre un RDV
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-phone-alt me-2"></i> Contact
            </a>
          </li>
        </ul>
        </div>
    
        {/* <div className="dropdown">
          <button 
            className="btn btn-light dropdown-toggle " 
            type="button" 
            id="languageDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false ">
            <i className="fas fa-globe me-2 "></i> Langue
          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <a className="dropdown-item" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png" alt="German Flag" width="20" className="me-2" /> Allemand
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png" alt="US Flag" width="20" className="me-2" /> Anglais
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
        </>
    )


}
export default NavBar;