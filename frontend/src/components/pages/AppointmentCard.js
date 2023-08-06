import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Appoinments() {
  return (
    <div className='body'>
        <Container><h2 className='topic mt-3'>Appoinments </h2></Container>
        <pre></pre><pre></pre>
        <section className='section bg-c-light border-top border-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Link to="/newAppoinment" className='btn-link'><h3 className='linkTopic'>Make a New Appoinment</h3></Link>
                <pre></pre>
              </div>
              <div className='col-md-4'>
                <div className='card shadow'>
                  <div className='card-body'>
                    <h6 className='underline'>Appoinment 1</h6>
                    <p>Date:  <br/>
                       Due Date: <br/>
                       Reason: <br/>
                       Medical MedProfessional: <br/>
                    </p>
                  </div>
                </div>
              </div>
              <pre></pre>

              <div className='col-md-4'>
                <div className='card shadow'>
                  <div className='card-body'>
                    <h6 className='underline'>Appoinment 2</h6>
                    <p>Date:  <br/>
                       Due Date: <br/>
                       Reason: <br/>
                    </p>
                  </div>
                </div>
              </div>
              <pre></pre>

            </div>
          </div>
        </section>
    </div>
  )
}