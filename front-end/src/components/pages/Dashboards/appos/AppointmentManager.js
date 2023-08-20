import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import { useNavigate } from 'react-router-dom';
import './../patients/Search.css'
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons';


const AppointmentManager = () => {
  const [searchInput, setSearchInput] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAppointmentsByPatientId = async () => {
      try {
        const userJSON = sessionStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const token = user.accessToken;
        const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/appointment/find/all', {
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
        const userJSON = sessionStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const token = user.accessToken;
        const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/medprof/all', {
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
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.put('https://lifecare-5z1q.onrender.com/api/v1/appointment/save/' + appointment.appointmentId,
        {
          ...appointment,
          medicalProfessional: { professionalId: appointment.medicalProfessional.professionalId } // Only send the professionalId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.status === 200) {
        alert('Save successful!');
      } else {
        alert('Save unsuccessful!');
      }
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
    window.location.reload();
  };
  

  const handleDelete = async (id) => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('https://lifecare-5z1q.onrender.com/api/v1/appointment/delete/' + id,
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

  const handleAssignDoctor = (id, selectedDoctorId) => {
    const updatedAppointments = appointments.map((appo) => {
      if (appo.appointmentId === id) {
        return { ...appo, medicalProfessional: { professionalId: selectedDoctorId } };
      }
      return appo;
    });
    setAppointments(updatedAppointments);
  };
  

  const renderDoctorOptions = () => {
    const options = [<option key='' value=''>Assign Doctor</option>];
    doctors.forEach((doctor) => {
      options.push(<option key={doctor.professionalId} value={doctor.professionalId}>{doctor.fname} {doctor.lname}</option>);
    });
    return options;
  };

  const filteredAppos = appointments.filter(appointment => {
    const today = `${appointment.dueDate}`;
    return today.includes(searchInput.toLowerCase());
  });

  const groupedAppointments = {};
  filteredAppos.forEach((appointment) => {
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

        <IconContext.Provider value={{ color: 'white', size: '25px' }}>
          <div class="search-box">
              <button class="btn-search"><i class="fas fa-search"><BiSearch/></i></button>
              <input type="text" class="input-search" placeholder="Search by Due Date" value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}/>
          </div>
        </IconContext.Provider>

          {Object.entries(groupedAppointments).map(([patientName, appos]) => (
            <div className='row my-2 mb-2' key={patientName}>
              <h6 className='appobold'>{patientName}</h6>
              {appos.map((appointment) => (
                <div className='col-md-4 mb-3' key={appointment.id}>
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
                            <Button variant='primary' className={appointment.medicalProfessional ? 'ms-2 me-2 btn-light btn-outline-warning text-dark': 'ms-2 me-2 btn-light btn-outline-danger'} onClick={() => handleSave(appointment)}>
                              Save
                            </Button>
                            <Button variant='primary' className={appointment.medicalProfessional ? 'ms-2 btn-light btn-outline-warning text-dark': 'ms-2 btn-light btn-outline-danger'} onClick={() => handleDelete(appointment.appointmentId)}>
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
                            <Button variant='primary' className='ms-2 me-2 btn-light btn-outline-success' disabled={true} onClick={() => handleSave(appointment)}>
                              Save
                            </Button>
                            <Button variant='primary' className='ms-2 btn-light btn-outline-success' disabled={true} onClick={() => handleDelete(appointment.appointmentId)}>
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

export default AppointmentManager;
