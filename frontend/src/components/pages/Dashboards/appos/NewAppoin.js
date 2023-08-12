import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarPatient from '../../../inc/navbar/NavbarPatient';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewAppoin() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [appointment, setAppointment] = useState(
    {
      patient: {
          patientId: '',
          user: {
            id: ''
          }
      },
      accept: false
  })

  const handleFormChange = (e) => {
      const { name, value } = e.target;
      setAppointment((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    if (appointment.date !== '' && appointment.dueDate !== '' && appointment.reason !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  // console.log(appointment);

  const navigate = new useNavigate();

  // API call
  const saveNewAppo = async () => {
    try {
      const userJSON = localStorage.getItem('user');
      const patientId = localStorage.getItem('patientId');
      const user = JSON.parse(userJSON);

      appointment.patient.patientId = patientId;
      appointment.patient.user.id = user.id;

      const token = user.accessToken;

      const response = axios.post(
      'http://localhost:8080/api/v1/appointment/save',
        appointment, 
        {
          headers: {
              Authorization: `Bearer ${token}`
          }
        });
    } catch (error) {
      console.error('Error saving data !', error)
    }
    alert('Save successful !');
    navigate('/patient/appointments');
    // Clear the editing field
    setAppointment('');
  };

  const navigateBack = () => {
    navigate('/patient/appointments');
  };



  return (
    <>
    <NavbarPatient/>
    <div className='body'>
      <pre></pre>
      <div className='d-flex justify-content-center'>
      <section className='section col-md-4 bg-c-light border-top border-bottom'>
      <h2 className='topic mt-3 fs-2 d-flex justify-content-center'>New Appointment</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Form>
                <Form.Group className='mb-3' id='formBasicDate'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='Date'
                    onChange={handleFormChange}
                    name='date'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' id='formBasicDueDate'>
                  <Form.Label>Due date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='Due date'
                    onChange={handleFormChange}
                    name='dueDate'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' id='formBasicReason'>
                  <Form.Label>Reason</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Reason'
                    onChange={handleFormChange}
                    name='reason'
                    required
                  />
                </Form.Group>
                  <div className='d-flex d-flex justify-content-center'>
                  <Button variant='primary' type='submit' className='me-5' onClick={saveNewAppo} disabled={!isFormFilled}>
                    Submit
                  </Button>
                  <Button variant='primary' type='submit' onClick={navigateBack}>
                    Back
                  </Button>
                </div>
              </Form>
              <pre></pre>
              <pre></pre>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
}

export default NewAppoin;