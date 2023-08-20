import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import axios from 'axios';
import { useEffect } from 'react';

export default function MedProfMedications() {
    const [medications, setMedications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  // API call
  const fetchAllMedications = async () => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const professionalId = sessionStorage.getItem('professionalId');
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/medication/find/medprofid/' + professionalId,
      {
       headers: {
         Authorization: `Bearer ${token}`
       }
     });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('error fetching data: ', error);
      return null;
    }
  };
  const settingMedications = async () => {
    try {
      const medcans = await fetchAllMedications();
      console.log(medcans);
      setMedications(medcans);
      setIsLoading(false); // Set loading state to false when data is fetched
    } catch (error) {
      console.error("Error fetching medications:", error);
      setIsLoading(false); // Set loading state to false even in case of an error
    }
  };
  // call the function only once
  useEffect(() => {
    settingMedications();
  }, []);


  const handleDelete = async (id) => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('https://lifecare-5z1q.onrender.com/api/v1/medication/delete/' + id,
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
      console.error("Error deleting medication:", error);
    }
    window.location.reload();
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
        </div>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <pre></pre>
            </div>
            {medications.map((medication) => (
              <div className='col-md-4 my-2' key={medication.medicationId}>
                <div className='card bg-dark shadow container'>
                  <div className='card-body bg-light px-3 py-2'>
                    <h6 className='appobold'>
                    {`${medication.patient.fname} ${medication.patient.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>Medication no:</span> {medication.medicationId} <br />
                      <span className='appoDetail'>Medication Name:</span> {medication.name} <br />
                      <span className='appoDetail'>Start Date:</span> {medication.startDate} <br />
                      <span className='appoDetail'>End Date:</span> {medication.endDate} <br/ >
                    </p>
                    <div className='d-flex justify-content-end'>
                      <Button variant='primary' className='ms-2 btn-light btn-outline-danger' onClick={() => handleDelete(medication.medicationId)}>Delete</Button>
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
};