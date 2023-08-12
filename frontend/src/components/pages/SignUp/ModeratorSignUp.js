import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignupModeratorService from '../../services/signup/SignupModeratorService';
import { useNavigate } from 'react-router-dom';
import ModSignupimg from './ModSignup.png';

function UserSignup() {
  const navigate = useNavigate();

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [retypePassword, setRetypePassword] = useState('');

  const handleFormChange = (e) => {
    const form = e.target.form;
    setIsFormFilled(form.checkValidity());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    handleFormChange(e);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: newPassword
    }));
    checkPasswordMatch(newPassword, retypePassword);
  };

  const handleRetypePasswordChange = (e) => {
    const newRetypePassword = e.target.value;
    setRetypePassword(newRetypePassword);
    checkPasswordMatch(formData.password, newRetypePassword);
  };

  const checkPasswordMatch = (password, retypePassword) => {
    if (password === retypePassword) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  const signupService = new SignupModeratorService();

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      signupService.handleSignup(formData, user.accessToken);
      navigate("/signin");
      alert("Signup Success!");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className='body '>
      <Container>
        <div className='d-flex justify-content-center'>
          <Card className="shadow col-md-4">
            <Card.Body>
            <h2 className='d-flex justify-content-center'>
                <img src={ModSignupimg} alt=''  style={{ width: '150px', height: 'auto' }} className='img-fluid' />
              </h2>
              <pre></pre>
              <section className='section bg-c-light border-top border-bottom'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicRetypePassword">
                          <Form.Label>Retype Password</Form.Label>
                          <Form.Control type="password" placeholder="Retype password" onChange={handleRetypePasswordChange} required />
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <Button variant="primary" type="button" onClick={handleSubmit} disabled={!isFormFilled}>
                            Sign up
                          </Button>
                          <Button variant="primary" type="submit">
                            <Link to="/signin" className="text-white" style={{ textDecoration: 'none' }}>
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

export default UserSignup;