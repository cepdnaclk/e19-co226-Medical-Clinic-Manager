import React, { useEffect, useState } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';
import img2 from './../imags/img2.png';
import FetchMedProfProfileService from '../../services/FetchMedProfProfileService';
import axios from 'axios';
import { FiLogOut } from 'react-icons/fi';


function CustomNavbar(isSignedIn) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [nic, setNic] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const[speciality, setSpeciality] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [editingField, setEditingField] = useState('');

  const location = useLocation();
  // Check if the user is on the home page
  const isHomePage = location.pathname === '/medprof/home';
  
  // API call
  const profile = new FetchMedProfProfileService();
  const fetchData = async () => {
    try {
      const response = await profile.handleProfileData();
      // console.log(response);
      let details;
      if(details !== null) {
        details = response.data;
        sessionStorage.setItem('professionalId', details.professionalId)
        // set profile data
        setFname(details.fname);
        setLname(details.lname);
        setContact(details.contact);
        setNic(details.nic);
        setAddress(details.address);
        setDob(details.dob);
        setSpeciality(details.speciality);
        setRole(details.user.roles[0].name);
        setUsername(details.user.username);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  // calling fetch data function
  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleSave = () => {
    setFname(fname);
    setLname(lname);
    setNic(nic);
    setContact(contact);
    setAddress(address);
    setDob(dob);
    setSpeciality(speciality)

    const user = JSON.parse(sessionStorage.getItem('user'));
    const professionalId = sessionStorage.getItem('professionalId');
    const token = user.accessToken;
    console.log(token);
    try {
      const response = axios.put(
      'https://lifecare-5z1q.onrender.com/api/v1/medprof/save/' + professionalId,
        {
          fname: fname,
          lname: lname,
          nic: nic,
          address: address,
          contact: contact,
          dob: dob,
          speciality: speciality,
          user:{
            id: user.id
          }
        }, 
        {
          headers: {
              Authorization: `Bearer ${token}`
          }
        });
    } catch (error) {
      console.error('Error saving data !', error)
    }
      alert('Save successful !')
    // Clear the editing field
    setEditingField('');
  };

  const handleCancel = () => {
    // Reset the value of the editing field to its original value
    // ...

    // Clear the editing field
    setEditingField('');
  };

  const signout = () => {
    alert('Are you sure !'); // make a popup
    sessionStorage.clear();
  }

  const handleFieldChange = (event) => {
    switch (editingField) {
      case 'fname':
        setFname(event.target.value);
        break;
      case 'lname':
        setLname(event.target.value);
        break;
      case 'contact':
        setContact(event.target.value);
        break;
      case 'nic':
        setNic(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'dob':
        setDob(event.target.value);
        break;
      case 'speciality':
        setSpeciality(event.target.value);
        break;
      default:
        break;
    }
  };

  const navigate = new useNavigate();

  const navAdvanced = () => {
    navigate("/change_username_email_password");
  };

  return (
    <>
      <Navbar expand="lg" bg="body-tertiary bg-dark" variant="dark" className="navbar-dark shadow">
        <div className="container-fluid navback navbar-container bg-dark">
          <Link to="/medprof/home" className="navbar-brand">
            <img src={img2} alt='' className='navbar-logo' />
          </Link>
          {/*<Link to="/" className="navbar-brand">
            <h2 className='topic_lifeCare'>LifeCare</h2>
          </Link>*/}
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Link to="/medprof/home" className="nav-link active">
                  <h7 className="nav_topic">Home</h7>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/patients" className="nav-link">
                  <h7 className="nav_topic">Patients</h7>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/medprof/my_patients" className="nav-link">
                  <h7 className="nav_topic">My Patients</h7>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/medprof/appointments" className="nav-link">
                  <h7 className="nav_topic">Appointments</h7>
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
                      <Link to='/' className='nav-link'>
                        <h7 className='nav_topic navbar-text-edit' onClick={signout}><FiLogOut/> Sign out</h7>
                      </Link>
                    </Navbar.Text>
                    </>
            )}

            {isSignedIn && (
                <Navbar.Text>
                Signed in as: <a href="#profile" onClick={() => setShowOffcanvas(true)}>{fname}</a>
                </Navbar.Text>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Offcanvas style={{width:"500px"}} show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" backdropClassName="bg-offcanvas">
        <Offcanvas.Header closeButton className="bg-c-light">
          <Offcanvas.Title><h7 className='offcanva-topic'>Profile</h7></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-c-light">
          <Card className='shadow'>
            <Card.Body>
            <table>
  <tbody>
    <tr className='appoDetail mb-2'>
      <td>First Name:</td>
      <td>
        {editingField === 'fname' ? (
          <>
            <input type="text" value={fname} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {fname}
            <Button variant="link" size="sm" onClick={() => handleEdit('fname')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Last Name:</td>
      <td>
        {editingField === 'lname' ? (
          <>
            <input type="text" value={lname} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {lname}
            <Button variant="link" size="sm" onClick={() => handleEdit('lname')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Contact:</td>
      <td>
        {editingField === 'contact' ? (
          <>
            <input type="text" value={contact} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {contact}
            <Button variant="link" size="sm" onClick={() => handleEdit('contact')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>NIC Number:</td>
      <td>
        {editingField === 'nic' ? (
          <>
            <input type="text" value={nic} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {nic}
            <Button variant="link" size="sm" onClick={() => handleEdit('nic')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Address:</td>
      <td>
        {editingField === 'address' ? (
          <>
            <input type="text" value={address} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {address}
            <Button variant="link" size="sm" onClick={() => handleEdit('address')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Date of Birth:</td>
      <td>
        {editingField === 'dob' ? (
          <>
            <input type="text" value={dob} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {dob}
            <Button variant="link" size="sm" onClick={() => handleEdit('dob')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Speciality:</td>
      <td>
        {editingField === 'speciality' ? (
          <>
            <input type="text" value={speciality} onChange={handleFieldChange} />
            <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
            <Button variant="secondary" size="sm" onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            &nbsp; {speciality}
            <Button variant="link" size="sm" onClick={() => handleEdit('speciality')}>Edit</Button>
          </>
        )}
      </td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>User Name:</td>
      <td>{username}</td>
    </tr>
    <tr className='appoDetail mb-2'>
      <td>Role:</td>
      <td> MEDICAL PROFESSIONAL</td>
    </tr>
  </tbody>
</table>

              <div>
                <Button className='btn-light btn-outline-danger mt-4' onClick={navAdvanced}>
                  Advanced
                </Button>
              </div>
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
                      <Link to='/' className='nav-link active'>
                        {/* <h7 className='nav_topic'>Home</h7> */}{/*
                        <button type="button" class="btn btn-dark"><b>Home</b></button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/appoinments' className='nav-link'>
                        {/* <h7 className='nav_topic'>Appointments</h7> */}{/*
                        <button type="button" class="btn btn-dark"><b>Appointments</b></button>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/medications' className='nav-link'>
                        {/* <h7 className='nav_topic'>Medications</h7> */}{/*
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
                        {/* <h7 className='nav_topic'>Staff</h7> */}{/*
                        <button type="button" class="btn btn-dark"><b>Staff</b></button>
                      </a>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/managers' className='dropdown-item'>
                            {/* <h7 className='nav_subtopic'>Managers</h7> */}{/*
                            <button type="button" class="btn btn-light"><b>Managers</b></button>
                          </Link>
                        </li>
                        <li>
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          <Link to='/medprofessionals' className='dropdown-item'>
                            {/* <h7 className='nav_subtopic'>MedProfessionals</h7> */}{/*
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