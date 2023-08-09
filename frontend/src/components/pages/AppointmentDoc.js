import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const appointmentsData = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    title: 'Appointment 1',
    date: '2023-08-10',
    dueDate: '2023-08-08',
    reason: 'Checkup',
    medProf: 'Dr. John Doe',
  },
  // ... more appointment data
];

const isCurrentUserPatient = false; // Set this based on your logic

export default function AppointmentDoc() {
  return (
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>
          Appointments
        </h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <pre></pre>
            </div>

            {appointmentsData.map((appointment) => (
              <div className='col-md-4 my-2' key={appointment.id}>
                <div className='card shadow container'>
                  <div className='card-body px-3 py-2'>
                    <h6 className='appobold'>
                    {`${appointment.fname} ${appointment.lname}`}
                    </h6>
                    <p>
                      <span className='appoDetail'>Appointment no:</span> {appointment.id} <br />
                      <span className='appoDetail'>Date:</span> {appointment.date} <br />
                      <span className='appoDetail'>Due Date:</span> {appointment.dueDate} <br />
                      <span className='appoDetail'>Reason:</span> {appointment.reason}
                      {appointment.medProf && (
                        <>
                          <br />
                          <span className='appoDetail'>Medical Professional:</span>{' '}
                          {appointment.medProf}
                        </>
                      )}
                    </p>
                    <div className='d-flex'>
                      <Button variant='primary'>Accept
                      {/*what to do to link*/}
                      </Button>
                      <Button variant='primary' className='ms-2'>Deny</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
