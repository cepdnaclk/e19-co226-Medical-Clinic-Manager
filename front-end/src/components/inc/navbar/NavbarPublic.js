import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';
import img2 from './../imags/img2.png';
import './PublicNavbar.css';
import { FiLogIn } from 'react-icons/fi';


function PublicNavbar() {

  const location = useLocation();
  // Check if the user is on the home page
  const isHomePage = location.pathname == '/';

  return (
    <>
      <Navbar expand="lg" bg="body-tertiary" variant="dark" className="navbar-dark shadow">
        <div className="container-fluid navback navbar-container bg-dark">
          <Link to="/" className="navbar-brand">
            <img src={img2} alt='' className='navbar-logo' />
          </Link>
          {/*<Link to="/" className="navbar-brand">
            <h2 className='topic_lifeCare'>LifeCare</h2>
          </Link>*/}
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Link to="/" className="nav-link active">
                  <h7 className="nav_topic">Home</h7>
                </Link>
              </Nav.Item>
              <NavDropdown title="Staff" id="staff-dropdown">
                <NavDropdown.Item>
                  <Link to="/managers/all" className="dropdown-item">
                    <h7 className="nav_subtopic">Managers</h7>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/medprofs/all" className="dropdown-item">
                    <h7 className="nav_subtopic">MedProfessionals</h7>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            {isHomePage && (
                    <>
                    <Navbar.Text>
                      <Nav.Item>
                        <Link to="/user/signup" className="dropdown-item">
                          <h7 className="nav_topic">Signup</h7>
                        </Link>
                      </Nav.Item>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to='/signin' className='nav-link'>
                        <h7 className='nav_topic navbar-text-edit'><FiLogIn/> Sign in</h7>
                        </Link>
                    </Navbar.Text>
                    </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default PublicNavbar;




{/*import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img2 from './imags/img2.png';
import { FiLogIn } from "react-icons/fi";
//import { Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';


function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className='navbar-dark shadow'>
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
              <div className='container-fluid navback bg-dark navbar-container'>
                <img src={img2} alt='' className='d-flex justify-content-center align-items-center' style={{ width: '180px', height: '73px', padding: '5px'}}/>
                <a className='navbar-brand' href="#">
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
                  <ul className='navbar-nav me-auto mb-lg-0 d-flex justify-content-center align-items-center'>
                    <li className='nav-item'>
                      <Link to='/' className='nav-link active'>
                        {/* <h5 className='nav_topic'>Home</h5> */}{/*
                        <button type="button" class="btn btn-dark"><b>Home</b></button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/appoinments' className='nav-link'>
                        {/* <h5 className='nav_topic'>Appointments</h5> */}{/*
                        <button type="button" class="btn btn-dark"><b>Appointments</b></button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/medications' className='nav-link'>
                        {/* <h5 className='nav_topic'>Medications</h5> */}{/*
                        <button type="button" class="btn btn-dark"><b>Medications</b></button>
                      </Link>
                    </li>
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle d-flex justify-content-center align-items-center'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        {/* <h5 className='nav_topic'>Staff</h5> */}{/*
                        <button type="button" class="btn btn-dark"><b>Staff</b></button>
                      </a>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/managers' className='dropdown-item'>
                            {/* <h5 className='nav_subtopic'>Managers</h5> */}{/*
                            <button type="button" class="btn btn-light"><b>Managers</b></button>
                          </Link>
                        </li>
                        <li>
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          <Link to='/medprofessionals' className='dropdown-item'>
                            {/* <h5 className='nav_subtopic'>MedProfessionals</h5> */}{/*
                            <button type="button" class="btn btn-light"><b>MedProfessionals</b></button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {isHomePage && (
                      <>
                        <li className='nav-item'>
                          <Link to='/signin' className='nav-link'>
                          <button type="button" class="btn btn-light"><b><FiLogIn/> Sign in</b></button>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/signup' className='nav-link'>
                          <button type="button" class="btn btn-light"><b>Sign up</b></button>
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
*/}
