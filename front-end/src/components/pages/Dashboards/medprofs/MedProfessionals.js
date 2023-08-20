import React from 'react';
import { Container } from 'react-bootstrap';
import PublicNavbar from '../../../inc/navbar/NavbarPublic';
import NavbarPatient from '../../../inc/navbar/NavbarPatient';
import NavbarMedProf from '../../../inc/navbar/NavbarMedProf';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function MedProfessionals() {
  const [medprofs, setMedprofs] = useState([]);
  // API call
  const fetchAllMedProfs = async () => {
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
    const mdprs = await fetchAllMedProfs();
    console.log(mdprs);
    setMedprofs(mdprs);
  };
  // call the function only once
  useEffect(() => {
    settingMedProfs();
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
      <PublicNavbar/>
    }
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
