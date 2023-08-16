import React from 'react'
import "./../../../pages/file.css"
import { Container } from 'react-bootstrap'
import NavbarManager from './../../../inc/navbar/NavbarManager'
import Footer from './../../../inc/Footer';

export default function Home() {
  return (
    <>
    <NavbarManager/>
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
                <h3 className='main-heading fs-5'>Welcome to the command center of healthcare excellence. LifeCare equips managers with a comprehensive platform to oversee clinic operations with efficiency and precision. From managing appointments and patient data to coordinating medical professionals and resources, LifeCare provides the tools to ensure seamless clinic management. With real-time insights and intuitive controls, you can enhance the patient experience, streamline processes, and lead your team to success. LifeCare empowers you to elevate healthcare delivery and drive organizational excellence.</h3>
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

<b>Clinic Overview Dashboard:</b><br/>
Gain a comprehensive view of clinic operations, including appointment schedules, patient demographics, and key performance indicators. Monitor clinic activity and make informed decisions to optimize efficiency.
<br/><br/>
<b>Provide Accounts for new Medical Professionals:</b><br/>
Manager has the previllage to provide username and password for new medical professionals, afterwards they can change them.
<br/><br/>
<b>Appointment Management:</b><br/>
Monitor and manage appointments across different medical professionals and specialties. Allocate resources effectively to ensure smooth patient flow and minimize wait times.
<br/><br/>
<b>Staff Management:</b><br/>
Efficiently manage medical professionals and support staff, including onboarding, scheduling, and performance evaluation. Ensure a well-coordinated and productive team.
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
