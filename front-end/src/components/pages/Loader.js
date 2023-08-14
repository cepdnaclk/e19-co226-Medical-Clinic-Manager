import React from 'react';
import './Loader.css';
import Signinlogo from './signin/SigninLogo.png';

const Loader = () => {
    return (
        <div>
            <div class="loader">
            <img src={Signinlogo} alt=''  style={{ width: '200px', height: 'auto', opacity: '0.5' }} className='img-fluid mb-3' />
            <div className="loader__circles" style={{ opacity: '0.8' }}>
                <span class="loader__element"></span>
                <span class="loader__element"></span>
                <span class="loader__element"></span>
            </div>
            </div>
        </div>
    );
};

export default Loader;