import React from 'react';
import job from '../../images/job.jpg';

const Hero = () => {

    return (
        <div className='hero'>
            <div className="hero-text">
                <h1>Find the perfect<br /> job for you</h1>
                {/* <p></p> */}
            </div>
            <div className="hero-img">
                <img src={job} alt="Hero Img" />
            </div>
        </div>
    );
}

export default Hero;
