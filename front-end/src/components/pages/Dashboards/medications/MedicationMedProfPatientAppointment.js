import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import { MdLibraryAdd } from 'react-icons/md';

let fname;
let lname;
let nic;
const MedicationMedProfPatientAppointment = () => {
  const [medications, setMedications] = useState([]);

// API call https://lifecare-5z1q.onrender.com/api/v1/medication/find/patientid/{patientid}
const fetchMedicationsByMedProfIdPatientId = async () => {
  try {
    const userJSON = sessionStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const token = user.accessToken;
    const professionalId = sessionStorage.getItem('professionalId');
    const patientJSON = JSON.parse(sessionStorage.getItem('patient'));
    const pId = patientJSON.patientId;
    const appointmentId = sessionStorage.getItem('appointmentId');
    fname = patientJSON.fname;
    lname = patientJSON.lname;
    nic = patientJSON.nic;
    const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/medication/find/' + professionalId + '/' + pId + '/' + appointmentId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log('https://lifecare-5z1q.onrender.com/api/v1/medication/find/' + professionalId + '/' + pId + '/' + appointmentId);
    // Check the status code directly
    if (response.status === 401) {
        console.log('Unauthorized'); // Handle unauthorized case
        // Handle unauthorized case (e.g., redirect to a login page)
      } else {
        console.log(response.data); // Handle successful response
        return response.data; // Return data when status is 200
      }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to handle it where the function is called
    }
};

const navigate = new useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const medicationsData = await fetchMedicationsByMedProfIdPatientId();
      setMedications(medicationsData);
    } catch (error) {
      // Handle error if needed
    }
  };

  fetchData();
}, []);

console.log(medications);

// if (medications.length === 0){
//   navigate('/medprof/no_medications');
//   return null;
// }

const handleDelete = async (medication) => {
  console.log(medication);
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('https://lifecare-5z1q.onrender.com/api/v1/medication/delete/' + medication.medicationId,
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
      console.error("Error saving medication:", error);
    }
    window.location.reload();
};

const handleBack = () => {
  navigate(-1);
};

return (
    <>
    <NavbarMedProf/>
    <div className='body'>
      <Container>
        <div className='row mb-0'>
          <div className="col-3 me-3">
            <h2 className='topic mt-3 fs-1'>
              Medications
            </h2>
          </div>
          <div className="col-3 mt-4">
              <Button className="btn-light btn-outline-dark" onClick={handleBack}>
                Back to Appointments
              </Button>
          </div>
        </div>
        <h2 className='topic mt-3 fs-5'>
          {fname} {lname} <br/>
          (NIC : {nic}) <br/>
        </h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <pre></pre>
            </div>
            <Link to="/medprof/new_medication" className='btn-link'>
                  <Button className='btn-light btn-outline-dark ms-1'>
                    <span><MdLibraryAdd/> New Medication</span>
                  </Button>
                </Link>
            {medications.map((medication) => (
              <div className='col-md-4 my-2' key={medication.medicationId}>
                <div className='card bg-dark shadow container'>
                  <div className='card-body bg-light px-3 py-2'>
                    <p>
                      <span className='appoDetail'>Medication no:</span> {medication.medicationId} <br />
                      <span className='appoDetail'>Medication Name:</span> {medication.name} <br />
                      <span className='appoDetail'>Start Date:</span> {medication.startDate} <br />
                      <span className='appoDetail'>End Date:</span> {medication.endDate} <br/ >
                    </p>
                    <div className='d-flex justify-content-end'>
                      <Button variant='primary' className='ms-2 btn-light btn-outline-danger' onClick={() => handleDelete(medication)}>Delete</Button>
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

export default MedicationMedProfPatientAppointment;
