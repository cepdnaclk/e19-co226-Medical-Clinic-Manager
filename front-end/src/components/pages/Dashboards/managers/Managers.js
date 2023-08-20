import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';
import PublicNavbar from '../../../inc/navbar/NavbarPublic';
import NavbarPatient from '../../../inc/navbar/NavbarPatient';
import NavbarManager from '../../../inc/navbar/NavbarManager';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';

const Managers = () => {
  const [managers, setManagers] = useState([]);

  // API call
  const fetchAllManagers = async () => {
    try {
      const response = await axios.get('https://lifecare-5z1q.onrender.com/api/v1/manager/all');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('error fetching data: ', error);
      return null;
    }
  };

  const settingManagers = async () => {
    const mgrs = await fetchAllManagers();
    console.log(mgrs);
    setManagers(mgrs);
  };

  // call the function only once
  useEffect(() => {
    settingManagers();
  }, []);
  
  let role;
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user  !== null){
    role = user.roles[0];
  } else {
    role = null;
  }

  return (
    <>
    {
      (role === 'ROLE_USER') ? <NavbarPatient/> : 
      (role === 'ROLE_MODERATOR') ? <NavbarMedProf/> : 
      (role === 'ROLE_ADMIN') ? <NavbarManager/> : 
      <PublicNavbar/>
    }
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>
          Managers
        </h2>
      </Container>
      <pre></pre>
      
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            {managers.map((manager) => (
              <div className='col-md-4 my-2' key={manager.id}>
                <div className='card shadow container bg-dark'>
                  <div className='card-body bg-light px-3 py-2'>
                    <h6 className='appobold mt-2'>
                      {`${manager.fname} ${manager.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>NIC:</span> {manager.nic} <br />
                      <span className='appoDetail'>Address:</span> {manager.address} <br />
                      <span className='appoDetail'>Contact:</span> {manager.contact} <br />
                      <span className='appoDetail'>Date of Birth:</span> {manager.dob} <br />
                    </p>
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

export default Managers;
