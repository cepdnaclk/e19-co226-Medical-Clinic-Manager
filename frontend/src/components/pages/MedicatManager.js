import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

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
  {
    id: 2,
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
  {
    id: 3,
    patient: {
      fname: 'John',
      lname: 'Down',
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

const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Wilson']; // List of doctors

const MedicatManager = () => {
  const [medications, setMedications] = useState(medicationsData);

  const handleDelete = (id) => {
    const updatedMedications = medications.filter((med) => med.id !== id);
    setMedications(updatedMedications);
  };

  const handleAssignDoctor = (id, selectedDoctor) => {
    const updatedMedications = medications.map((med) => {
      if (med.id === id) {
        return { ...med, assignedDoctor: selectedDoctor };
      }
      return med;
    });
    setMedications(updatedMedications);
  };

  const renderDoctorOptions = () => {
    const options = [<option key='default' value=''>Assign Doctor</option>];
    doctors.forEach((doctor) => {
      options.push(<option key={doctor} value={doctor}>{doctor}</option>);
    });
    return options;
  };

  const groupedMedications = {};
  medications.forEach((medication) => {
    const patientName = `${medication.patient.fname} ${medication.patient.lname}`;
    if (!groupedMedications[patientName]) {
      groupedMedications[patientName] = [];
    }
    groupedMedications[patientName].push(medication);
  });

  return (
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>Medications</h2>
      </Container>
      <pre></pre>
      
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          {Object.entries(groupedMedications).map(([patientName, meds]) => (
            <div className='row my-2' key={patientName}>
              <h6 className='appobold'>{patientName}</h6>
              {meds.map((medication) => (
                <div className='col-md-4' key={medication.id}>
                  <div className='card shadow container'>
                    <div className='card-body px-3 py-2'>
                      <p>
                        <span className='appoDetail'>Medicine Name:</span> {medication.medicineName} <br />
                        <span className='appoDetail'>Dose:</span> {medication.dose} <br />
                        <span className='appoDetail'>Times Per Day:</span> {medication.timesPerDay} <br/>
                        <span className='appoDetail'>
                          Assign Doctor:
                          <Form.Select
                            className='ms-2'
                            value={medication.assignedDoctor || ''}
                            onChange={(e) => handleAssignDoctor(medication.id, e.target.value)}
                          >
                            {renderDoctorOptions()}
                          </Form.Select>
                        </span> <br/>
                        <Button variant='primary' className='ms-2' onClick={() => handleDelete(medication.id)}>
                          Delete
                        </Button>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedicatManager;
