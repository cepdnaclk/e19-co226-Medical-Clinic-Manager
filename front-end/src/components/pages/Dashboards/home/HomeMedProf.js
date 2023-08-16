import React from 'react'
import "./../../../pages/file.css"
import { Container } from 'react-bootstrap'
import NavbarMedProf from './../../../inc/navbar/NavbarMedProf'
import Footer from './../../../inc/Footer';


export default function Home() {
  return (
    <>
    <NavbarMedProf/>
    <div className='body'>
        <Container>
          <h3 className='topic mt-3'><b>Welcome to LifeCare</b></h3>
        </Container>
        <pre></pre>
        {/* <img src={img1} alt='' className='homeimg'/> */}
        <pre></pre>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-start'>
                <h3 className='main-heading fs-5'>LifeCare empowers medical professionals like you to provide exceptional patient care. Streamline your practice by effortlessly managing patient records, appointments, and prescriptions through our intuitive interface. Collaborate seamlessly with your patients and colleagues, ensuring accurate and timely communication. With LifeCare, you have the tools to optimize your practice, so you can focus on what truly matters – delivering high-quality healthcare to your patients.</h3>
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
                  <p>
                  <b>Patient Dashboard:</b><br/>
Access a comprehensive dashboard that provides an overview of your patients' appointments, medical history, and treatment plans. Stay organized and deliver personalized care with ease.
<br/><br/>
<b>Appointment Management:</b><br/>
Efficiently manage patient appointments, view upcoming schedules, and make adjustments as needed. Seamlessly communicate appointment details and ensure a smooth patient experience.
<br/><br/>
<b>Patient Records:</b><br/>  
Easily access and update patient records, including medical history, diagnoses, treatment plans, and progress notes. Stay informed about each patient's health journey for accurate decision-making.               
<br/><br/>
<b>Prescription Management:</b><br/>  
Generate and manage electronic prescriptions for medications, treatments, and therapies. Ensure accurate dosage instructions and streamline the prescription process for your patients.   
<br/><br/>
<b>Treatment Plans:</b><br/>
Create and customize treatment plans for patients, outlining recommended interventions, therapies, and follow-up appointments. Track patient progress and adjust plans as needed.                 
                  
                  
                  </p>
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
