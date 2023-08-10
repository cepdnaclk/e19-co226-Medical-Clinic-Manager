import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SigninAllService from '../services/SigninAllService';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleFormChange = (e) => {
    const form = e.target.form;
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setIsFormFilled(form.checkValidity());
  };

  const navigate = useNavigate();

  const signinService = new SigninAllService();

  const handleSubmit = async () => {
    try {
      console.log(formData);
      signinService.handleSignin(formData);
      navigate("/register");
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Signin Failed!");
    }
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
                          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleFormChange} required />
                        </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleFormChange} required />
                      </Form.Group>
                      <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="me-5" onClick={handleSubmit} disabled={!isFormFilled}>
                          Sign in
                        </Button>
                        <Button variant="primary" type="submit">
                          <Link to="/signup" className="text-white" style={{ textDecoration: 'none' }}>Sign up</Link>
                        </Button>
                      </div>
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

export default Signin;
