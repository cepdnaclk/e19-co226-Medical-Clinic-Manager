import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function NewAppoin() {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleFormChange = () => {
    const dateInput = document.getElementById('formBasicDate');
    const dueDateInput = document.getElementById('formBasicDueDate');
    const reasonInput = document.getElementById('formBasicReason');

    if (dateInput.value && dueDateInput.value && reasonInput.value) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  return (
    <div className='body'>
      <Container>
        <h2 className='topic mt-3'>New Appointment</h2>
      </Container>
      <pre></pre>
      <section className='section bg-c-light border-top border-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicDate'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='Date'
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicDueDate'>
                  <Form.Label>Due date</Form.Label>
                  <Form.Control
                    type='date'
                    placeholder='Due date'
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicReason'>
                  <Form.Label>Reason</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Reason'
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>

                <Button variant='primary' type='submit' disabled={!isFormFilled}>
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
  );
}

export default NewAppoin;
