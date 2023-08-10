import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignupUserService from '../services/SignupUserService';

function Signup() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleFormChange = (e) => {
    const form = e.target.form;
    setIsFormFilled(form.checkValidity());
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordMatch(newPassword, retypePassword);
  };

  const handleRetypePasswordChange = (e) => {
    const newRetypePassword = e.target.value;
    setRetypePassword(newRetypePassword);
    checkPasswordMatch(password, newRetypePassword);
  };

  const checkPasswordMatch = (password, retypePassword) => {
    if (password === retypePassword) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const signupService = new SignupUserService();

  const postData = {
    username: username,
    email: email,
    password: password
  };

  console.log(postData);

  return (
    <div className='body '>
      <Container>
        <div className='d-flex justify-content-center'>
          <Card className="shadow col-md-7">
            <Card.Body>
              <h2 className='topic mt-3'>Sign up</h2>
              <pre></pre>
              <section className='section bg-c-light border-top border-bottom'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <Form>
                      <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onClick={(event) => {handleFormChange(event); setUsername(event.target.value);}} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onClick={(event) => {handleFormChange(event); setEmail(event.target.value);}} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onClick={(event) => {handleFormChange(event); setPassword(event.target.value);}} required />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicRetypePassword">
                        <Form.Label>Retype Password</Form.Label>
                        <Form.Control type="password" placeholder="Retype password" onChange={handleFormChange} required />
                      </Form.Group>
                        
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <Button variant="primary" type="submit" onClick={async () => {try {await signupService.handleSignup(postData);} catch (error) {console.error("Signup failed:", error);}}} disabled={!isFormFilled}>
                            <Link to="/register" className="btn btn-primary btn-sm">
                              Sign up
                            </Link>
                          </Button>
                          <Button variant="primary" type="submit">
                            <Link to="/signin" className="btn btn-primary btn-sm">
                              Back to Sign in
                            </Link>
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

export default Signup;