import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import axios from 'axios';
import { useEffect } from 'react';

export default function MedProfessionals() {
  const [medprofs, setMedprofs] = useState([]);
  // API call
  const fetchAllManagers = async () => {
    try {
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/medprof/all');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('error fetching data: ', error);
      return null;
    }
  };
  const settingMedProfs = async () => {
    const mdprs = await fetchAllManagers();
    console.log(mdprs);
    setMedprofs(mdprs);
  };
  // call the function only once
  useEffect(() => {
    settingMedProfs();
  }, []);


  const handleDelete = async (id) => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('https://lifecare-5z1q.onrender.com/api/v1/medprof/delete/' + id,
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

  return (
    <>
    <NavbarManager/>
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>Medical Professionals</h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <pre></pre>
            </div>

            {medprofs.map((medProf) => (
              <div className='col-md-4 my-2' key={medProf.id}>
                <div className='card shadow container bg-dark'>
                  <div className='card-body px-3 py-2 bg-light'>
                    <h6 className='appobold'>
                      {`${medProf.fname} ${medProf.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>Speciality:</span> {medProf.speciality} <br />
                      <span className='appoDetail'>NIC:</span> {medProf.nic} <br />
                      <span className='appoDetail'>Address:</span> {medProf.address} <br />
                      <span className='appoDetail'>Phone Number:</span> {medProf.contact} <br />
                      <span className='appoDetail'>Date of Birth:</span> {medProf.dob}
                    </p>
                    <div className='d-flex justify-content-end mb-1'>
                      <Button variant='primary' className='ms-2 btn-light btn-outline-danger' onClick={() => handleDelete(medProf.professionalId)}>
                        Delete
                      </Button>
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
