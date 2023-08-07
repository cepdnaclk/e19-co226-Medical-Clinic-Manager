import React from 'react';
import { Container } from 'react-bootstrap';

const managersData = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    nic: '123456789',
    address: '123 Main St',
    contact: '555-1234',
    dob: '1980-05-10',
    insuranceDetails: 'ABC Insurance',
  },
  // ... more manager data
];

const Managers = () => {
  return (
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
          <div>Here are the patient details.</div>
            {managersData.map((manager) => (
              <div className='col-md-4 my-2' key={manager.id}>
                <div className='card shadow container'>
                  <div className='card-body px-3 py-2'>
                    <h6 className='appobold'>
                      {`${manager.fname} ${manager.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>NIC:</span> {manager.nic} <br />
                      <span className='appoDetail'>Address:</span> {manager.address} <br />
                      <span className='appoDetail'>Contact:</span> {manager.contact} <br />
                      <span className='appoDetail'>Date of Birth:</span> {manager.dob} <br />
                      <span className='appoDetail'>Insurance Details:</span> {manager.insuranceDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Managers;
