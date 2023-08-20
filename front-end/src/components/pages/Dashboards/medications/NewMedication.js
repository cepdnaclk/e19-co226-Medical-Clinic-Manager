import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewMedication() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [medication, setMedication] = useState(
    {
      patient: {
          patientId: ''
      },
      medicalProfessional:{
        professionalId: '',
        user: {
          username: ''
        }
      },
      appointment: {
        appointmentId: ''
      }
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' || name === 'startDate' || name === 'endDate' || name === 'dosage') {
      setMedication((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    // Check if the form is filled
    if (medication.name !== '' && medication.startDate !== '' && medication.endDate !== '' && medication.dosage !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  // console.log(medication);

  const navigate = new useNavigate();

  // API call
  const saveNewAppo = async () => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const patietJSON = sessionStorage.getItem('patient');
      const appointmentId = sessionStorage.getItem('appointmentId');
      const user = JSON.parse(userJSON);
      const patient = JSON.parse(patietJSON);
      const professionalId = sessionStorage.getItem('professionalId');
      medication.patient.patientId = patient.patientId;
      medication.medicalProfessional.user.username = user.username;
      medication.medicalProfessional.professionalId = professionalId;
      medication.appointment.appointmentId = appointmentId;

      const token = user.accessToken;

      const response = axios.post(
      'https://lifecare-5z1q.onrender.com/api/v1/medication/save',
        medication, 
        {
          headers: {
              Authorization: `Bearer ${token}`
          }
        });

        document.body.appendChild(medication);

    } catch (error) {
      console.error('Error saving data !', error)
    }
    alert('Save successful !');
    navigate(-1);
    // Clear the editing field
    setMedication('');
  };

  const navigateBack = () => {
    navigate(-1);
  };



  return (
    <>
    <NavbarMedProf/>
    <div className='body'>
      <pre></pre>
      <div className='d-flex justify-content-center'>
      <section className='section col-md-4 bg-c-light border-top border-bottom'>
      <h2 className='topic mt-3 fs-2 d-flex justify-content-center'>New Medication</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Form>
                <Form.Group className='mb-3' id='formBasicDate'>
                  <Form.Label>Medication Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='medication name'
                    onChange={handleFormChange}
                    name='name'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' id='formBasicDueDate'>
                  <Form.Label>Start date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='start date'
                    onChange={handleFormChange}
                    name='startDate'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' id='formBasicReason'>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='end date'
                    onChange={handleFormChange}
                    name='endDate'
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' id='formBasicReason'>
                  <Form.Label>Dosage</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='dosage'
                    onChange={handleFormChange}
                    name='dosage'
                    required
                  />
                </Form.Group>
                  <div className='d-flex d-flex justify-content-center'>
                  <Button variant='primary' type='button' className='me-5 btn-light btn-outline-primary' onClick={saveNewAppo} disabled={!isFormFilled}>
                    Save
                  </Button>
                  <Button variant='primary' className='btn-light btn-outline-primary' type='button' onClick={navigateBack}>
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

export default NewMedication;
