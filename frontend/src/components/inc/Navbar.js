import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import img2 from './imags/img2.jpeg';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  

  return (
    <div className='navbar-dark shadow'>
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
              <div className='container-fluid navback navbar-container'>
                <img src={img2} alt='' className='navbar-logo' />
                <a className='navbar-brand' href="#">
                  <h2 className='topic_lifeCare'>LifeCare</h2>
                </a>
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
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <Link to='/' className='nav-link active'>
                        <h8 className='nav_topic'>Home</h8>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/appoinments' className='nav-link'>
                        <h8 className='nav_topic'>Appointments</h8>
                      </Link>
                    </li>
                    {!isHomePage && ( // Show the Medications link if not on the home page
                      <li className='nav-item'>
                        <Link to='/medications' className='nav-link'>
                          <h8 className='nav_topic'>Medications</h8>
                        </Link>
                      </li>
                    )}
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <h8 className='nav_topic'>Staff</h8>
                      </a>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/managers' className='dropdown-item'>
                            <h8 className='nav_subtopic'>Managers</h8>
                          </Link>
                        </li>
                        <li>
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          <Link to='/medprofessionals' className='dropdown-item'>
                            <h8 className='nav_subtopic'>MedProfessionals</h8>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {isHomePage && (
                      <>
                        <li className='nav-item'>
                          <Link to='/signin' className='nav-link'>
                            <h8 className='nav_topic'>Sign in</h8>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/signup' className='nav-link'>
                            <h8 className='nav_topic'>Sign up</h8>
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
