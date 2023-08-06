import React from 'react'
import { Link } from 'react-router-dom';
import img2 from './imags/img2.jpeg'

function Navbar() {
  return (
    <div className='navbar-dark shadow'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <img src={img2} alt='' className='navbar-logo'/>
                            <a class="navbar-brand" href="#"><h2 className='topic_lifeCare'>LifeCare</h2></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link to="/" class="nav-link active"><h8 className="nav_topic">Home</h8></Link>

                                </li>
                                <li class="nav-item">
                                <Link to="/appoinments" class="nav-link"><h8 className="nav_topic">Appoinments</h8></Link>
                            
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h8 className="nav_topic">Staff</h8>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/managers" class="dropdown-item"><h8 className="nav_topic">Managers</h8></Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link to="/medprofessionals" class="dropdown-item"><h8 className="nav_topic">MedProfessionals</h8></Link></li>
                                </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar;
