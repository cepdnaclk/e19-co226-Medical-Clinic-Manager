import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import axios from 'axios';
import { useEffect } from 'react';

export default function Patient() {
    const [patients, setPatients] = useState([]);
    const [serh, setSerh] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  // API call
  const fetchAllPatients = async () => {
    try {
    const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.get('http://localhost:8080/api/v1/patient/all',
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
      const mdprs = await fetchAllPatients();
      console.log(mdprs);
      setPatients(mdprs);
      setIsLoading(false); // Set loading state to false when data is fetched
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
      const userJSON = localStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const response = await axios.delete('http://localhost:8080/api/v1/patient/delete/' + id,
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
  const user = JSON.parse(localStorage.getItem('user'));
  if (user  !== null){
    role = user.roles[0];
  } else {
    role = null;
  }

  let gvalue;
  const search = async (searchValue) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/patient/search/' + searchValue);
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  


  return (
    <>
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
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Search Patients by First Name"
                        value={serh}
                        onChange={(e) => setSerh(e.target.value)}
                        />
                        <div>
                            <button className="btn me-2 btn-outline-dark te" name="search" onClick={() => search(serh)} type="button">
                                Search
                            </button>
                            <button className="btn btn-outline-dark" name='clear' value='a' onClick={clear} type="button">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                {(gvalue !== '') ? (<div className='row'>
                    {patients.map((patient) => (
                    <div className='col-md-4 my-2' key={patient.id}>
                        <div className='card shadow container'>
                        <div className='card-body px-3 py-2'>
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
                            <div className='d-flex'>
                                {(role === 'ROLE_ADMIN') &&
                                    <Button variant='primary' className='ms-2' onClick={() => handleDelete(patient.patientId)}>
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
    </>
  );
}