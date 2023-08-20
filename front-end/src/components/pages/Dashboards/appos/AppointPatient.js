import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavbarPatient from '../../../inc/navbar/NavbarPatient';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {MdLibraryAdd} from 'react-icons/md';
import './../patients/Search.css'
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const AppointmentPatient = () => {
  const [searchInput, setSearchInput] = useState('');
  const [appointments, setAppointments] = useState('');

// API call https://lifecare-5z1q.onrender.com/api/v1/appointment/find/patientid/{patientid}
const fetchAppointmentsByPatientId = async () => {
  try {
    const userJSON = sessionStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const token = user.accessToken;
    const patientId = sessionStorage.getItem('patientId');
    const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/appointment/find/patientid/' + patientId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    // Check the status code directly
    if (response.status === 401) {
      console.log('Unauthorized'); // Handle unauthorized case
    } else {
      console.log(response.data); // Handle successful response
    }

    return response.data; // Always return response data
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to handle it where the function is called
  }
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

const navigate = new useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const appointmentsData = await fetchAppointmentsByPatientId();
      setAppointments(appointmentsData);
    } catch (error) {
      // Handle error if needed
    }
  };

  fetchData();
}, []);

console.log(appointments.length);

if (appointments.length === 0){
  navigate('/patient/new_appointment');
  return null;
}

const isAPatient = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const token = user.accessToken;
    const response = await axios.get("https://lifecare-5z1q.onrender.com/api/v1/patient/existsbyuserid/" + user.id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error checking patient:", error);
    return false; // Handle the error case
  }
};

const checkCurrentUserPatient = async () => {
  const isPatient = await isAPatient();
  // console.log(isPatient);
};

const handleMedications = (appointmentId) => {
  sessionStorage.setItem('appointmentId', appointmentId);
  navigate("/patient/appointment/medications");
};

const filteredAppos = appointments.filter(appointment => {
  const today = `${appointment.dueDate}`;
  return today.includes(searchInput.toLowerCase());
});

const isCurrentUserPatient = checkCurrentUserPatient();

  return (
    <>
    <NavbarPatient/>
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>
          My Appointments
        </h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {isCurrentUserPatient ? (<>
                <Link to="/patient/new_appointment" className='btn-link'>
                  <Button className='btn-light btn-outline-dark ms-1'>
                    <span><MdLibraryAdd/> New Appointment</span>
                  </Button>
                </Link>
                <IconContext.Provider value={{ color: 'white', size: '25px' }}>
                <div class="search-box mt-4">
                    <button class="btn-search"><i class="fas fa-search"><BiSearch/></i></button>
                    <input type="text" class="input-search" placeholder="Search by Due Date" value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}/>
                </div>
              </IconContext.Provider>
              </>
              ) : (
                <div><h className='regfont'>If you are not a registered patient, please make the appoinment after being registered.</h>
                <Link to="/register" className='btn-link'>
                  <h3 className='linkTopic'>
                    Register as a Patient
                  </h3>
                </Link>
                </div>
              )}
              <pre></pre>
            </div>

            {filteredAppos.map((appointment) => (          
              <div className='col-md-4 my-2' key={appointment.appointmentId}>
                <div className={appointment.accept ?'card bg-success shadow container':'card bg-danger shadow container'}>
                <div className='card-body bg-light px-3 py-2 d-flex flex-column justify-content-between'>
                  <div>
                    <h6 className='appobold'>
                      {appointment.patient.fname} {appointment.patient.lname}
                    </h6>
                    <p>
                      <span className='appoDetail'>NIC:</span> {appointment.patient.nic} <br />
                      <span className='appoDetail'>Date:</span> {appointment.date} <br />
                      <span className='appoDetail'>Due Date:</span> {appointment.dueDate} <br />
                      <span className='appoDetail'>Reason:</span> {appointment.reason} <br />
                      <span className='appoDetail'>Accepted:</span> {appointment.accept ? <span>True</span> : <span>False</span>}
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                  {!appointment.accept ? (<>
                    <Button variant='primary' className='ms-2 btn-light btn-outline-danger' onClick={() => handleDelete(appointment.appointmentId)}>
                      Delete
                    </Button>
                    <Button variant='primary' className='ms-2 btn-light btn-outline-primary' disabled={true} onClick={() => handleMedications(appointment.appointmentId)}>
                      Medications
                    </Button>
                  </>
                  ) : (<>
                    <Button variant='primary' className='ms-2 btn-light btn-outline-success' disabled={true} onClick={() => handleDelete(appointment.appointmentId)}>
                      Delete
                    </Button>
                    <Button variant='primary' className='ms-2 btn-light btn-outline-primary' disabled={false} onClick={() => handleMedications(appointment.appointmentId)}>
                      Medications
                    </Button>
                    </>
                  ) }
                  </div>
                </div>
              </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  </div>
</>
);
}

export default AppointmentPatient;