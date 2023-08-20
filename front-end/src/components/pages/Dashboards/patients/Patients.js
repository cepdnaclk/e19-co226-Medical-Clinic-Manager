import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import axios from 'axios';
import { useEffect } from 'react';
import Loader from '../../Loader';

export default function Patient() {
    const [patients, setPatients] = useState([]);
    const [serh, setSerh] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  // API call
  const fetchAllPatients = async () => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/patient/all',
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
  const settingPatients = async () => {
    try {
      setTimeout(async () => {
        const mdprs = await fetchAllPatients();
        console.log(mdprs);
        setPatients(mdprs);
        setIsLoading(false); // Set loading state to false when data is fetched
      }, 500);

    } catch (error) {
      console.error("Error fetching patients:", error);
      setIsLoading(false); // Set loading state to false even in case of an error
    }
  };
  // call the function only once
  useEffect(() => {
    settingPatients();
  }, []);


  const handleDelete = async (id) => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('https://lifecare-5z1q.onrender.com/api/v1/patient/delete/' + id,
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

  const clear = async () => {
    fetchAllPatients();
    setSerh('');
    window.location.reload();
  };

  let role;
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user  !== null){
    role = user.roles[0];
  } else {
    role = null;
  }

  let gvalue;
  const search = async (searchValue) => {
    try {
      const response = await axios.post('https://lifecare-5z1q.onrender.com/api/v1/patient/search/' + searchValue);
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  


  return (
    <>
    {isLoading? <Loader/>:(<>
    {
      (role === 'ROLE_ADMIN') ? <NavbarManager/> : <NavbarMedProf/>
    }
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>Patients</h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
            <div className='col-md-5'>
              <div class="input-group mb-3">
                {/* search box */}
                  <input
                      type="text"
                      className="form-control me-2"
                      placeholder="Search Patients by First Name"
                      value={serh}
                      onChange={(e) => setSerh(e.target.value)}
                  />
                  <div>
                      <button className="btn me-2 btn-outline-primary te" name="search" onClick={() => search(serh)} type="button">
                          Search
                      </button>
                      <button className="btn btn-outline-danger" name='clear' value='a' onClick={clear} type="button">
                          Clear
                      </button>
                  </div>
              </div>
            </div>
            
                {(gvalue !== '') ? (<div className='row'>
                    {patients.map((patient) => (
                    <div className='col-md-4 my-2' key={patient.id}>
                        <div className='card shadow container bg-dark'>
                        <div className='card-body px-3 py-2 bg-light'>
                            <h6 className='appobold'>
                            {`${patient.fname} ${patient.lname}`}
                            </h6>
                            <p>
                            <span className='appoDetail'>NIC:</span> {patient.nic} <br />
                            <span className='appoDetail'>Address:</span> {patient.address} <br />
                            <span className='appoDetail'>Phone Number:</span> {patient.contact} <br />
                            <span className='appoDetail'>Date of Birth:</span> {patient.dob} <br />
                            <span className='appoDetail'>Insurance Provider:</span> {patient.insuranceDetails}
                            </p>
                            <div className='d-flex justify-content-end mb-1'>
                                {(role === 'ROLE_ADMIN') &&
                                    <Button variant='primary' className='ms-2 btn-light btn-outline-danger' onClick={() => handleDelete(patient.patientId)}>
                                        Delete
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            ):(null)}
        </div>
      </section>
    </div>
    </>)}
    </>
  );
}
