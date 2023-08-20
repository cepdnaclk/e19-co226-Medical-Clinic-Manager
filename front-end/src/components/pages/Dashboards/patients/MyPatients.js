import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export default function Patient() {
    const [patients, setPatients] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [counts, setCounts] = useState([]);

  // API call
  const fetchAllPatients = async () => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const professionalId = sessionStorage.getItem('professionalId');
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/appointment/find/patient/' + professionalId,
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
      const conts = await fetchAllPatients();
      console.log(conts);
      setPatients(conts);
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

  // API call
  const fetchAppoCounts = async () => {
    try {
      const userJSON = sessionStorage.getItem('user');
      const user = JSON.parse(userJSON);
      const token = user.accessToken;
      const professionalId = sessionStorage.getItem('professionalId');
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/appointment/count/' + professionalId,
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
  const settingAppoCounts = async () => {
    try {
      const conts = await fetchAppoCounts();
      console.log(conts);
      setCounts(conts);
      setIsLoading(false); // Set loading state to false when data is fetched
    } catch (error) {
      console.error("Error fetching patients:", error);
      setIsLoading(false); // Set loading state to false even in case of an error
    }
  };
  // call the function only once
  useEffect(() => {
    settingAppoCounts();
  }, []);

  const navigate = new useNavigate();

  const viewAppos = (p) => {
    sessionStorage.setItem('patient', JSON.stringify(p));
    navigate('/medprof/my_patients/appos');
  };

const appointmentCount = (patientId) => {
    const countArray = counts.find((countsArray) => countsArray[0] === patientId);
    return countArray ? countArray[1] : 0;
};

 // Filter patients based on search input
 const filteredPatients = patients.filter(patient => {
  const fullName = `${patient.fname} ${patient.lname}`.toLowerCase();
  return fullName.includes(searchInput.toLowerCase());
});

  return (
    <>
    <NavbarMedProf/>
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>My Patients</h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>

              <div className='col-md-5'>
                {/* search box */}
                <IconContext.Provider value={{ color: 'white', size: '25px' }}>
                  <div class="search-box">
                      <button class="btn-search"><i class="fas fa-search"><BiSearch/></i></button>
                      <input type="text" class="input-search" placeholder="search by first name..." value={searchInput}
                          onChange={e => setSearchInput(e.target.value)}/>
                  </div>
                </IconContext.Provider>
              </div>

                <div className='row'>
                    {filteredPatients.map((patient, index) => (
                    <div className='col-md-4 my-2' key={index}>
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
                        </div>
                        <div className="row mb-0 ms-0 me-0 bg-light">
                            <div className="col-6 bg-light">
                                <div className="bg-primary text-light pt-1 pb-1">
                                    <span className="bg-dark bg-primary text-light pt-1 ps-2 pe-1 pb-1 mb-0">
                                        Appointments
                                    </span>
                                    <span className='ps-2'>
                                        {appointmentCount(patient.patientId)}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6 text-end mt-n2 mb-2">
                                <Button className="btn-light btn-outline-dark mb-2" onClick={() => viewAppos(patient)}>
                                    ViewAppos
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
