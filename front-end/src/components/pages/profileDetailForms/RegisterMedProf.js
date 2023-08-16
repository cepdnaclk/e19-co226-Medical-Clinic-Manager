import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import RegisterMedProfService from '../../services/RegisterMedProfService';
import { useNavigate } from 'react-router-dom';

function RegisterMedProf() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    nic: '',
    dob: '',
    address: '',
    contact: '',
    speciality: '',
    user: {
      id: ''
    }
  });
    
    // Refresh the page if user object exists (only once)
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (!storedUser) {
      window.location.reload();
    }

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {

      // Update the user id in the formData
      setFormData((prevData) => ({
        ...prevData,
        user: {
          id: storedUser.id
        }
      }));
    }
  }, []);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const registerMedprof = new RegisterMedProfService();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Retrieve the stored user object
      const storedUser = JSON.parse(sessionStorage.getItem('user'));
      if (storedUser && storedUser.accessToken) {
        await registerMedprof.handleRegisterUser(formData, storedUser.accessToken);
        navigate("/medprof/home");
      } else {
        console.error("User not found or access token missing.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Saving Failed! Please enter an unique NIC.");
    }
  };

  return (
    <div className='body d-flex justify-content-center align-items-center'>
      <Container>
      <div className='d-flex justify-content-center'>
        <Card className="shadow col-md-8">
          <Card.Body>
            <h2 className='topic mt-3 fs-2 d-flex justify-content-center'>Hello there! We need more about you...</h2>
            <section className='section bg-c-light border-top border-bottom'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>

                    <Form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                          <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="fname" placeholder="Enter first name" onChange={handleFormChange} required />
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lname" placeholder="Enter last name" onChange={handleFormChange} required />
                          </Form.Group>
                        </div>
                      </div>

                      <Form.Group className="mb-3" controlId="formBasicNIC">
                        <Form.Label>NIC</Form.Label>
                        <Form.Control type="text" name="nic" placeholder="Enter NIC" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Enter address" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contact" placeholder="Enter contact number" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicInsurance">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control type="text" name="speciality" placeholder="Enter speciality" onChange={handleFormChange} required />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I hereby agree to the terms of policy" onChange={handleCheckboxChange} required />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="btn-light btn-outline-primary" disabled={!isCheckboxChecked}>
                        Submit
                      </Button>
                    </Form>

                  </div>
                </div>
              </div>
            </section>
          </Card.Body>
        </Card>
      </div>
      </Container>
    </div>
  );
}

export default RegisterMedProf;
