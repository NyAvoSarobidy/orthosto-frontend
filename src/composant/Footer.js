import React from "react";


function Footer(){
    return(
        <>
         <div id="Localisation" className="Localisation  bg-dark">
            <div  className="container pt-5">
            <div className="row align-items-center">
                <div className="col-4">
                    <p className="text-white  fw-bold d-flex align-items-center" >
                    <i className="fas fa-phone-alt me-2"></i> CONTACT
                    </p>
                    <div className="col-12 col-md-6 d-flex flex-column text-small text-white">
           
            </div>
                </div>

                <div className="col-4 gap-3">
                    <p className="text-white  fw-bold d-flex align-items-center">
                    <i className="fas fa-link me-2"></i> LIENS ET INFORMATIONS
                    </p>
                </div>

                <div className="col-4 gap-3">
                    <p className="text-white  fw-bold d-flex align-items-center">
                    <i className="fas fa-map-marker-alt me-2"></i> LOCALISATION
                    </p>
                </div>
                </div>

            </div>
        </div>
        </>
    )
}
export default Footer