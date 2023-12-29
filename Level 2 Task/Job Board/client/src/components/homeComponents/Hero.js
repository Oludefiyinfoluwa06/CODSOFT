import React from 'react';
import job from '../../images/job.jpg';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <h1>Find the perfect<br /> job for you</h1>
                <p>Search your career opportunities</p>
                <form action="">
                    <input type="text" placeholder='Search for jobs' />
                    <button><FaSearch /></button>
                </form>
            </div>
            <div className="hero-img">
                <img src={job} alt="Hero Img" />
            </div>
        </div>
    );
}

export default Hero;
