import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';
import img2 from './imags/img2.png';

function CustomNavbar(isSignedIn) {
  const [username, setUsername] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [editingField, setEditingField] = useState('');

  const location = useLocation();
  // Check if the user is on the home page
  const isHomePage = location.pathname == '/home';
  


  useEffect(() => {
    // Make API calls to fetch data from the database
    // ...

    // Update state variables with fetched data
    // ...
  }, []);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleSave = () => {
    // Make API call to update the corresponding field in the database
    // ...

    // Clear the editing field
    setEditingField('');
  };

  const handleCancel = () => {
    // Reset the value of the editing field to its original value
    // ...

    // Clear the editing field
    setEditingField('');
  };

  const handleFieldChange = (event) => {
    switch (editingField) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'nicNumber':
        setNicNumber(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'dob':
        setDob(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="body-tertiary" variant="dark" className="navbar-dark shadow">
        <div className="container-fluid navback navbar-container">
          <Link to="/home" className="navbar-brand">
            <img src={img2} alt='' className='navbar-logo' />
          </Link>
          {/*<Link to="/home" className="navbar-brand">
            <h2 className='topic_lifeCare'>LifeCare</h2>
          </Link>*/}
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Link to="/home" className="nav-link active">
                  <h8 className="nav_topic">Home</h8>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/appointments" className="nav-link">
                  <h8 className="nav_topic">Appointments</h8>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/medications" className="nav-link">
                  <h8 className="nav_topic">Medications</h8>
                </Link>
              </Nav.Item>
              <NavDropdown title="Staff" id="staff-dropdown">
                <NavDropdown.Item>
                  <Link to="/managers" className="dropdown-item">
                    <h8 className="nav_subtopic">Managers</h8>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/medprofessionals" className="dropdown-item">
                    <h8 className="nav_subtopic">MedProfessionals</h8>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            {isHomePage && (
                    <>
                    <Navbar.Text>
                        <Link to='/signin' className='nav-link'>
                        <h8 className='nav_topic navbar-text-edit'>Sign in</h8>
                        </Link>
                    </Navbar.Text>
                    <Navbar.Text>
                      <Link to='/signup' className='nav-link'>
                        <h8 className='nav_topic navbar-text-edit'>Sign up</h8>
                      </Link>
                    </Navbar.Text>
                    </>
            )}

            {isSignedIn && (
                <Navbar.Text>
                Signed in as: <a href="#Home" onClick={() => setShowOffcanvas(true)}>saji{username}</a>
                </Navbar.Text>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" backdropClassName="bg-offcanvas">
        <Offcanvas.Header closeButton className="bg-c-light">
          <Offcanvas.Title><h5 className='offcanva-topic'>Profile</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-c-light">
          <Card className='shadow'>
            <Card.Body>
              <p className='appoDetail'>
                Username: {editingField === 'username' ? (
                  <>
                    <input type="text" value={username} onChange={handleFieldChange} />
                    <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                  </>
                ) : (
                  <>
                    {username}
                    <Button variant="link" size="sm" onClick={() => handleEdit('username')}>Edit</Button>
                  </>
                )}
              </p>
              <p className='appoDetail'>
                NIC Number: {editingField === 'nicNumber' ? (
                  <>
                    <input type="text" value={nicNumber} onChange={handleFieldChange} />
                    <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                  </>
                ) : (
                  <>
                    {nicNumber}
                    <Button variant="link" size="sm" onClick={() => handleEdit('nicNumber')}>Edit</Button>
                  </>
                )}
              </p>
              <p className='appoDetail'>
                Address: {editingField === 'address' ? (
                  <>
                    <input type="text" value={address} onChange={handleFieldChange} />
                    <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                  </>
                ) : (
                  <>
                    {address}
                    <Button variant="link" size="sm" onClick={() => handleEdit('address')}>Edit</Button>
                  </>
                )}
              </p>
              <p className='appoDetail'>
                Date of Birth: {editingField === 'dob' ? (
                  <>
                    <input type="text" value={dob} onChange={handleFieldChange} />
                    <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                  </>
                ) : (
                  <>
                    {dob}
                    <Button variant="link" size="sm" onClick={() => handleEdit('dob')}>Edit</Button>
                  </>
                )}
              </p>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;




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
                      <Link to='/home' className='nav-link active'>
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