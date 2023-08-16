import React from 'react'
import "./../../../pages/file.css"
import { Container } from 'react-bootstrap'
import NavbarPatient from '../../../inc/navbar/NavbarPatient'
import Footer from './../../../inc/Footer';

export default function Home() {
  return (
    <>
    <NavbarPatient/>
    <div className='body'>
        <Container>
          <h3 className='topic mt-3 mb-0'><b>Welcome to LifeCare</b></h3>
        </Container>
        <pre></pre>
        {/* <img src={img1} alt='' className='homeimg'/> */}
        <pre></pre>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-start'>
                <h3 className='main-heading fs-5'>Welcome to your personalized healthcare hub with LifeCare. Our platform puts you in control of your health journey like never before. Access your medical history, schedule appointments, and receive reminders all in one place. Explore your comprehensive health records, empowering you to make informed decisions about your well-being. With LifeCare, you're not just a patient; you're an active participant in your health, with the tools and resources to manage your care effectively.</h3>
              </div>
            </div>
          </div>
        </section>
        <hr/>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-start'>
                <h3 className='main-heading'>Features</h3>
                <pre></pre>
                <p><b>Appointment Scheduling:</b><br/>
Easily schedule, reschedule, or cancel appointments with your healthcare providers through a user-friendly interface. Take control of your healthcare journey by selecting convenient dates and times that fit your schedule.
<br/><br/>
<b>Medical History Access:</b><br/>
Access your comprehensive medical history, including past appointments, diagnoses, treatments, and test results. Stay informed about your health journey and make informed decisions with a complete overview of your medical records.
<br/><br/>
<b>Medication Management:</b><br/>
Manage your medications effectively by viewing prescriptions, dosage instructions, and medication schedules. Set up reminders to ensure you never miss a dose and maintain a consistent treatment plan.</p>

<b>Secure Data Storage:</b><br/>
Rest assured that your health information is securely stored and accessible only to authorized individuals. Your privacy and confidentiality are our top priorities.
<br/><br/>
<b>Family Health Management:</b><br/>
Manage health profiles for your family members, making it easier to coordinate appointments and track healthcare needs for your loved ones.
                  <pre></pre>
              </div>
            </div>
          </div>
        </section>
    </div>
    <Footer/>
    </>
  )
}
