import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import RegisterUserService from '../services/RegisterUserService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    nic: '',
    dob: '',
    address: '',
    contact: '',
    insuranceDetails: '',
    user: {
      id: user.id
    }
  });

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const registerUser = new RegisterUserService();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      console.log(formData);
      const token = user.accessToken;
      console.log(token);
      await registerUser.handleRegisterUser(formData, token);
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Saving Failed!");
    }
  };

  return (
    <div className='body'>
      <Container>
        <Card className="shadow">
          <Card.Body>
            <h2 className='topic mt-3'>Register as a Patient</h2>
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
                        <Form.Label>Insurance Provider</Form.Label>
                        <Form.Control type="text" name="insuranceDetails" placeholder="Enter insurance provider" onChange={handleFormChange} required />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I hereby agree to the terms of policy" onChange={handleCheckboxChange} required />
                      </Form.Group>
                      <Button variant="primary" type="submit" disabled={!isCheckboxChecked}>
                        Submit
                      </Button>
                    </Form>

                  </div>
                </div>
              </div>
            </section>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
