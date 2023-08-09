import React from 'react'
import "./file.css"
import { Container } from 'react-bootstrap'
import img1 from './images/img1.jpg'

export default function Home() {
  return (
    <div className='body'>
        <Container><h1 className='topic mt-3'><b>Welcome to LifeCare</b></h1></Container>
        <pre></pre>
        <img src={img1} alt='' className='homeimg'/>
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
  )
}
