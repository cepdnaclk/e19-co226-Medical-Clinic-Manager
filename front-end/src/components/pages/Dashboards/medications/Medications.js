import React from 'react';
import { Container } from 'react-bootstrap';

const medicationsData = [
  {
    id: 1,
    patient: {
      fname: 'John',
      lname: 'Doe',
      nic: '123456789',
      address: '123 Main St',
      contact: '555-1234',
      dob: '1980-05-10',
    },
    medicineName: 'Medicine A',
    dose: '1 tablet',
    timesPerDay: 2,
  },
  // ... more medication data
];

const Medications = () => {
  return (
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>
          Medications
        </h2>
      </Container>
      <pre></pre>
      
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div>Here are the medication details.</div>
            {medicationsData.map((medication) => (
              <div className='col-md-4 my-2' key={medication.id}>
                <div className='card shadow container'>
                  <div className='card-body px-3 py-2'>
                    <h6 className='appobold'>
                      {`${medication.patient.fname} ${medication.patient.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>NIC:</span> {medication.patient.nic} <br />
                      <span className='appoDetail'>Address:</span> {medication.patient.address} <br />
                      <span className='appoDetail'>Contact:</span> {medication.patient.contact} <br />
                      <span className='appoDetail'>Date of Birth:</span> {medication.patient.dob} <br />
                      <span className='appoDetail'>Medicine Name:</span> {medication.medicineName} <br />
                      <span className='appoDetail'>Dose:</span> {medication.dose} <br />
                      <span className='appoDetail'>Times Per Day:</span> {medication.timesPerDay}
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

export default Medications;
