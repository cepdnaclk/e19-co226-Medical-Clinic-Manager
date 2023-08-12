import React from 'react'
import "./footer.css"
import img from './../inc/imags/img2.png';

function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h6>Contact Info</h6>
                    <hr/>
                    <img src={img} alt=''  style={{ width: '150px', height: 'auto' }} className='img-fluid' /><br/>
                    <div><p className='text-white mb-1'>Kurunegala road, Narammala</p></div>
                    <div><p className='text-white mb-1'>+94 76 637 0774</p></div>
                    <div><p className='text-white mb-1'>clinic@lifecare.com</p></div>
                </div>

                <div className='col-md-6'>
                    <h6>About </h6>
                    <hr/>
                    <p></p>
                </div>

            </div>
            <div className='d-flex justify-content-center font-family-base'>
                <pre>* all rights reserved *</pre>
            </div>
        </div>
    </section>
  )
}

export default Footer;
