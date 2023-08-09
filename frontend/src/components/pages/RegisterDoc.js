import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function RegisterDoc() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleFormChange = (e) => {
    const form = e.target.form;
    setIsFormFilled(form.checkValidity());
  };

  return (
    <div className='body'>
      <Container>
        <Card className="shadow">
          <Card.Body>
            <h2 className='topic mt-3'>Register as a Doctor</h2>
            <pre></pre>
            <section className='section bg-c-light border-top border-bottom'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>

                    <Form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" onChange={handleFormChange} required />
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" onChange={handleFormChange} required />
                          </Form.Group>
                        </div>
                      </div>

                      <Form.Group className="mb-3" controlId="formBasicNIC">
                        <Form.Label>NIC</Form.Label>
                        <Form.Control type="text" placeholder="Enter NIC" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter contact number" onChange={handleFormChange} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicInsurance">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control type="text" placeholder="Enter insurance provider" onChange={handleFormChange} required />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I hereby agree to the terms of policy" onChange={handleCheckboxChange} required />
                      </Form.Group>

                      <Button variant="primary" type="submit" disabled={!isCheckboxChecked || !isFormFilled}>
                        Submit
                      </Button>
                    </Form>
                    <pre></pre>
                    <pre></pre>
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

export default RegisterDoc;
