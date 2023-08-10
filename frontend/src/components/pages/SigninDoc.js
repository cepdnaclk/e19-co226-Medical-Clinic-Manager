import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SigninDoc() {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleFormChange = (e) => {
    const form = e.target.form;
    setIsFormFilled(form.checkValidity());
  };

  return (
    <div className='body'>
      <Container>
        <div className='d-flex justify-content-center'>
          <Card className="shadow col-md-7">
            <Card.Body>
              <h2 className='topic mt-3'>Sign in to LifeCare</h2>
              <pre></pre>
              <section className='section bg-c-light border-top border-bottom'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>

                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter username" onChange={handleFormChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={handleFormChange} required />
                        </Form.Group>
                        <pre></pre>

                        <Button variant="primary" type="submit" disabled={!isFormFilled}>
                          <Link to="/registerDoc" className="btn btn-primary btn-sm">
                            Sign in
                          </Link>
                        </Button>
                      </Form>
                      <pre></pre>
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

export default SigninDoc;
