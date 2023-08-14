import React, { useState } from "react";
import './TextAnimation.css';
import HomeLogo from './HomeLogo.png';
import { Button, Modal } from "react-bootstrap"; // Import the Modal component
import { useNavigate } from "react-router-dom";
import Loader from './../../Loader';
import PublicNavbar from "../../../inc/navbar/NavbarPublic";
import Footer from "../../../inc/Footer";

function Root() {
  const [showPopup, setShowPopup] = useState(false);


  const handleActionSelection = (action) => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };


  return (
    <>
    <PublicNavbar/>
    <div className="body">
    <div className="d-flex justify-content-center mt-0 mb-2">
    <img src={HomeLogo} alt=''  style={{ width: '200px', height: 'auto' }} className='img-fluid' />
    </div>
    <div className="d-flex justify-content-center">
    <div className="col-md-10 text-light text-dark">
    <div className="d-flex justify-content-center h7">
    Welcome to LifeCare, the ultimate DBMS designed exclusively for small clinics. 
    </div>
    <div className="d-flex justify-content-center h7">
    Streamline every aspect of your clinic's operations with ease
    </div>
    <div className="d-flex justify-content-center h7">
    Patients can effortlessly schedule appointments online,
    </div>
    <div className="d-flex justify-content-center h7">
    while doctors efficiently manage prescriptions and care plans
    </div>
    <div className="d-flex justify-content-center h7">
    elevate your clinic management to new heights
    </div>
    <div className="d-flex justify-content-center h7">
    with the latest app in the world 
    </div>
    <div className="d-flex justify-content-center h7">
    LifeCare
    </div>
    </div>
    </div>
    <div className="d-flex justify-content-center"><div className="h6">Discover LifeCare</div></div>
    <div className="d-flex justify-content-center">
      <Button className="btn-light btn-outline-primary" onClick={handleActionSelection}>
        <div className="d-flex justify-content-center h5">
        <p className="mb-0 mt-2 mx-1 ms-1 me-0">
        <span>Get </span><span>Started</span>
        </p>
        </div>
      </Button>
    </div>
      </div>
      <Footer/>
      
    {/* Popup/Modal */}
    <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><b>Please Sign Up or If already Registered please Sign In ! using the buttons in top right corner</b></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="btn-light btn-outline-primary" onClick={handlePopupClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Root;