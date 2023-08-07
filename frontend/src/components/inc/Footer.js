import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h6>Contact Info</h6>
                    <hr/>
                    <div><p className='text-white mb-1'>address</p></div>
                    <div><p className='text-white mb-1'>phone num</p></div>
                    <div><p className='text-white mb-1'>email</p></div>
                </div>

                <div className='col-md-6'>
                    <h6>About </h6>
                    <hr/>
                    <p>hjja</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer;
