import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import { useNavigate } from 'react-router-dom';

const AppointmentMedProf = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAppointmentsByPatientId = async () => {
      try {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const token = user.accessToken;
        const response = await axios.get('http://localhost:8080/api/v1/appointment/find/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const fetchMedProfs = async () => {
      try {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const token = user.accessToken;
        const response = await axios.get('http://localhost:8080/api/v1/medprof/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchData = async () => {
      const appointmentsData = await fetchAppointmentsByPatientId();
      const doctorsData = await fetchMedProfs();
      setAppointments(appointmentsData);
      setDoctors(doctorsData);
    };

    fetchData();
  }, []);

  const navigate = new useNavigate();

  if (appointments.length === 0){
    navigate('/manager/no_appointments');
    return null;
  }

  const handleSave = async (appointment) => {
    console.log(appointment);
    try {
      const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.put('http://localhost:8080/api/v1/appointment/save/' + appointment.appointmentId,
      appointment,
       {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if(response.status===200) {
        alert('Save successfull !');
      } else {
        alert('Save unsuccessfull !');
      }
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
    window.location.reload();
  };

  const handleDelete = async (id) => {
    try {
      const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('http://localhost:8080/api/v1/appointment/delete/' + id,
       {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if(response.status===200) {
        alert('Delete successfull !');
      } else {
        alert('Delete unsuccessfull !');
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
    window.location.reload();
  };

  const handleAssignDoctor = (id, selectedDoctor) => {
    const updatedAppointments = appointments.map((appo) => {
      if (appo.appointmentId === id) {
        return { ...appo, medicalProfessional: {professionalId: selectedDoctor}};
      }
      return appo;
    });
    setAppointments(updatedAppointments);
    console.log(updatedAppointments);
  };

  const renderDoctorOptions = () => {
    const options = [<option key='' value=''>Assign Doctor</option>];
    doctors.forEach((doctor) => {
      options.push(<option key={doctor.professionalId} value={doctor.professionalId}>{doctor.fname} {doctor.lname}</option>);
    });
    return options;
  };

  const groupedAppointments = {};
  appointments.forEach((appointment) => {
    const patientName = `${appointment.patient.fname} ${appointment.patient.lname} (NIC: ${appointment.patient.nic})`;
    if (!groupedAppointments[patientName]) {
      groupedAppointments[patientName] = [];
    }
    groupedAppointments[patientName].push(appointment);
  });

  return (
    <>
    <NavbarManager/>
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>Appointments</h2>
      </Container>
      <pre></pre>
      
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          {Object.entries(groupedAppointments).map(([patientName, appos]) => (
            <div className='row my-2' key={patientName}>
              <h6 className='appobold'>{patientName}</h6>
              {appos.map((appointment) => (
                <div className='col-md-4' key={appointment.id}>
                  <div className={appointment.accept ?'card bg-success shadow container':(appointment.medicalProfessional !== null) ?'card bg-warning shadow container':'card bg-danger shadow container'}>
                  <div className='card-body bg-light px-3 py-2'>
                      <p>
                        <span className='appoDetail'>Date:</span> {appointment.date} <br />
                        <span className='appoDetail'>Due Date:</span> {appointment.dueDate} <br />
                        <span className='appoDetail'>Reason:</span> {appointment.reason} <br/>
                        {(!appointment.accept) ? (
                          <>
                            <span className='appoDetail'>
                              Assign Doctor:
                              <Form.Select
                                className='ms-2'
                                value={appointment.medicalProfessional ? appointment.medicalProfessional.professionalId : ''}
                                onChange={(e) => handleAssignDoctor(appointment.appointmentId, e.target.value)}
                              >
                                {renderDoctorOptions()}
                              </Form.Select>
                            </span>
                            <br />
                            <Button variant='primary' className={appointment.medicalProfessional ? 'ms-2 me-2 bg-warning text-black': 'ms-2 me-2 bg-danger'} onClick={() => handleSave(appointment)}>
                              Save
                            </Button>
                            <Button variant='primary' className={appointment.medicalProfessional ? 'ms-2 bg-warning text-black': 'ms-2 bg-danger'} onClick={() => handleDelete(appointment.appointmentId)}>
                              Delete
                            </Button>
                          </>
                        ) : (
                          <>
                            <span className='appoDetail'>
                              Assign Doctor:
                              <Form.Select
                                className='ms-2'
                                value={appointment.medicalProfessional ? appointment.medicalProfessional.professionalId : ''}
                                onChange={(e) => handleAssignDoctor(appointment.appointmentId, e.target.value)}
                                disabled={true}
                              >
                                {renderDoctorOptions()}
                              </Form.Select>
                            </span>
                            <br />
                            <Button variant='primary' className='ms-2 me-2 bg-success' disabled={true} onClick={() => handleSave(appointment)}>
                              Save
                            </Button>
                            <Button variant='primary' className='ms-2 bg-success' disabled={true} onClick={() => handleDelete(appointment.appointmentId)}>
                              Delete
                            </Button>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default AppointmentMedProf;
