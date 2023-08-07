import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function NewAppoin() {
  return (
    <div className='body'>
        <Container><h2 className='topic mt-3'>New Appoinment</h2></Container>
        <pre></pre><pre></pre>
        <section className='section bg-c-light border-top border-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>

                <Form>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Due date</Form.Label>
                    <Form.Control type="date" placeholder="Due date" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control type="text" placeholder="Reason" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              <pre></pre>
                <pre></pre>
              </div>
            
            </div>
          </div>
        </section>
    </div>
  )
}

export default NewAppoin