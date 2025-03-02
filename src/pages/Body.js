
import React  from 'react';
import './style/stylebody.css'
import { Link } from "react-router-dom";
import Typical from 'react-typical';
function Body(){
    const styles = {
        profileImage: {
          width: "500px",
          height: "300px",
     
        },
   
    };
  
    return(

        <section id="hero" className="hero section ">
              <div className="container position-relative " >
                
              <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                  
              <i class="fas fa-clinic-medical icon-bounce"></i>
                  <h2 className="fs-bold"  style={{marginTop:"15PX"}} >
                  <Typical
                    steps={[
                        'Votre sourire est notre Priorité!!!', 2000,
                        'Nous prenons soin de vous.', 2000
                    ]}
                  
                    wrapper="span"
                    loop={1} // 1 pour une seule fois, ou Infinity pour une boucle infinie
                />
                    </h2>
                    <hr className="text-white me-auto" 
                        style={{ 
                        width: "100%", 
                        maxWidth: "300px", 
                        paddingBottom: "20px"
                        }} 
                    />

            <p >Orthodontie et stomatologie pour les enfants, les adolescents et les adultes.</p> 
                </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center ms-auto ">
                  <div id="myCarousel" className=" carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators" >
                        <button type="button" style={{ color: "black" }} data-bs-target="#myCarousel" data-bs-slide-to="0" className="active btn btn-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="carousel-caption">
                                <img
                                      className="img-thumbnail "
                                      src="/image/Font-4.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption">
                                <img
                                      className="img-thumbnail "
                                      src="/image/Font 5.jpeg"

                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption">
                                <img
                                      className="img-thumbnail "
                                       src="/image/font-6.jpg"
                                      alt="Profile"
                                      style={styles.profileImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " style={{ color: "black" }} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
              </div>
              
              </div>
              <br />
            <div className="row">
                <div className="col-12 col-md-auto mb-2 mb-md-0">
                    <Link to="" className="btn btn-danger w-100">
                    <i className="fas fa-calendar-alt me-2"></i> PRENDRE RDV
                    </Link>
                </div>
                <div className="col-12 col-md-auto">
                    <Link to="" className="btn btn-warning text-white w-100">
                    <i className="fas fa-phone-alt me-2"></i> CONTACT
                    </Link>
                </div>
                </div> 
            </div>
  
      </section>
    )
}
export default Body;