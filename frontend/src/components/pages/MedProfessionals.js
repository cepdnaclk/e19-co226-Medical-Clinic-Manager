import React from 'react';
import { Container } from 'react-bootstrap';

const medProfessionalsData = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    speciality: 'Cardiologist',
    nic: '123456789',
    address: '123 Main St',
    phoneNumber: '555-1234',
    dob: '1980-05-10',
    // other fields...
  },
  {
    id: 2,
    fname: 'Jane',
    lname: 'Smith',
    speciality: 'Dermatologist',
    nic: '987654321',
    address: '456 Elm St',
    phoneNumber: '555-5678',
    dob: '1975-12-20',
    // other fields...
  },
  // ... more medical professionals data
];

const MedProfessionals = () => {
  const renderMedProfCard = (medProf) => {
    return (
      <div key={medProf.id} className="mx-3 my-3">
        <div className="card shadow container">
          <div className="card-body px-3 py-2">
            <h6 className="appobold">{`${medProf.fname} ${medProf.lname}`}</h6>
            <p>
              <span className="appoDetail">Speciality:</span> {medProf.speciality} <br />
              <span className="appoDetail">NIC:</span> {medProf.nic} <br />
              <span className="appoDetail">Address:</span> {medProf.address} <br />
              <span className="appoDetail">Phone Number:</span> {medProf.phoneNumber} <br />
              <span className="appoDetail">Date of Birth:</span> {medProf.dob}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="body">
      <Container>
        <h2 className="topic mt-3">Details of Medical Professionals</h2>
      </Container>
      <div className="d-flex flex-wrap">
        {medProfessionalsData.map((medProf) => renderMedProfCard(medProf))}
      </div>
    </div>
  );
};

export default MedProfessionals;
