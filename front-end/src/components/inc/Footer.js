import React from 'react'
import "./footer.css"
import img from './../pages/Dashboards/root/HomeLogo.png';

function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h6>Contact Info</h6>
                    <hr/>
                    <img src={img} alt=''  style={{ width: '100px', height: 'auto' }} className='img-fluid mb-2' /><br/>
                    <div><p className='text-white mb-1'>Kurunegala road, Narammala</p></div>
                    <div><p className='text-white mb-1'>+94 76 637 0774</p></div>
                    <div><p className='text-white mb-1'>clinic@lifecare.com</p></div>
                </div>

                <div className='col-md-6'>
                    <h6>About </h6>
                    <hr/>
                    <p>
                        Our platform empowers clinics to efficiently handle appointments, 
                        medications, and vital medical information, all in one centralized 
                        and secure location. Patients can easily schedule appointments, access 
                        their medical history, and receive timely reminders, fostering a 
                        sense of engagement and empowerment in their healthcare journey. 
                        LifeCare enables doctors to optimize their practice by providing 
                        them with a convenient interface to manage patient records, prescribe 
                        medications, and stay organized.
                    </p>
                </div>

            </div>
            <hr/>
            <div className='d-flex justify-content-center font-family-base'>
                <pre>all rights reserved.</pre>
            </div>
        </div>
    </section>
  )
}

export default Footer;
