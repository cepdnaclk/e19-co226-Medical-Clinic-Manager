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
          <h3 className='topic mt-3'><b>Welcome to LifeCare (Manager)</b></h3>
        </Container>
        <pre></pre>
        {/* <img src={img1} alt='' className='homeimg'/> */}
        <pre></pre>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Description about clinic</h3>
                <pre></pre>
                <p>Here is the description...navigable address as the href value. If 
                  you cannot provide a valid href, but still need the 
                  element to resemble a link, use</p>
                  <pre></pre>
              </div>
            </div>
          </div>
        </section>
        <hr/>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Instructions to use the app</h3>
                <pre></pre>
                  <p>Here are the instuctions...navigable address as the href value. If 
                    you cannot provide a valid href, 
                    but still need the 
                    element to resemble a link, use</p>
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
