import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import img2 from './imags/img2.png';
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className='navback shadow'>
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
              <div className='container-fluid navback navbar-container'>
                <img src={img2} alt='' className='d-flex justify-content-center align-items-center' style={{ width: '180px', height: '73px', padding: '5px'}}/>
                <a className='navbar-brand' href="#"></a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav me-auto mb-lg-0 d-flex justify-content-center align-items-center'>
                    <li className='nav-item'>
                      <Link to='/' className='nav-link active'>
                        <button type="button" className="btn btn-primary"><b>Home</b></button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/appoinments' className='nav-link'>
                        <button type="button" className="btn nav_button"><b>Appointments</b></button>
                      </Link>
                    </li>
                    {!isHomePage && (
                      <>
                      <li className='nav-item'>
                      <Link to='/medications' className='nav-link'>
                        <button type="button" className="btn btn-primary"><b>Medications</b></button>
                      </Link>
                    </li>
                      </>
                    )
                    }
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle d-flex justify-content-center align-items-center'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <button type="button" className="btn nav_button"><b className='nav_topic'>Staff</b></button>
                      </a>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/managers' className='dropdown-item'>
                            <button type="button" className="btn btn-light"><b className='navback'>Managers</b></button>
                          </Link>
                        </li>
                        <li>
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          <Link to='/medprofessionals' className='dropdown-item'>
                            <button type="button" className="btn btn-light"><b>MedProfessionals</b></button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {isHomePage && (
                      <>
                        <li className='nav-item'>
                          <Link to='/signin' className='nav-link'>
                            <button type="button" className="btn btn-light"><b><FiLogIn/> Sign in</b></button>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/signup' className='nav-link'>
                            <button type="button" className="btn btn-light"><b>Sign up</b></button>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
