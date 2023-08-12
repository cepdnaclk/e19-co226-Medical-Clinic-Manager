import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const appointmentsData = [
  {
    id: 1,
    title: 'Appointment 1',
    date: '2023-08-10',
    dueDate: '2023-08-08',
    reason: 'Checkup',
    medProf: 'Dr. John Doe',
  },
  // ... more appointment data
];

const isCurrentUserPatient = false; // Set this based on your logic

export default function AppointPatient() {
  return (
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>
          My Appointments
        </h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {isCurrentUserPatient ? (
                <Link to="/newAppoinment" className='btn-link'>
                  <h3 className='linkTopic'>
                    Make a New Appointment
                  </h3>
                </Link>
              ) : (
                <div><h className='regfont'>If you are not a registered patient, please make the appoinment after being registered.</h>
                <Link to="/register" className='btn-link'>
                  <h3 className='linkTopic'>
                    Register as a Patient
                  </h3>
                </Link>
                </div>
              )}
              <pre></pre>
            </div>

            {appointmentsData.map((appointment) => (
              <div className='col-md-4 my-2' key={appointment.id}>
                <div className='card shadow container'>
                  <div className='card-body px-3 py-2'>
                    <h6 className='appobold'>
                      {appointment.title}
                    </h6>
                    <p>
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
