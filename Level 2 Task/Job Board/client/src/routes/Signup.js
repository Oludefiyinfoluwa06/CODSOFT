import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';

const Signup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [industry, setIndustry] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [experience, setExperience] = useState("");
    const [educationLevel, setEducationLevel] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pjt, setPjt] = useState("");
    
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/jobboard/user/signup", { firstname, lastname, email, phone, username, password, industry, jobTitle, experience, educationLevel, pjt, city, state, country })
            .then(res => {
                navigate("/post-a-job/login");
                console.log(res);
            })
            .catch(err => {
                setError(err.response.data.error);
                console.log(err);
            })
    };

  
  return (
    <div className='signup'>
      <form onSubmit={handleSubmit} >
        <h1>Fill out the following information</h1>
        <p className="error">{error}</p>
        <div className="info">
            <h3>Personal Information</h3>
            <div className="name">
                <div className="input-box">
                    <label htmlFor="firstname">Firstname<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='firstname' 
                        id='firstname'
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="lastname">Lastname<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='lastname' 
                        id='lastname'
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                </div>
            </div>
            <div className="contact">
                <div className="input-box">
                    <label htmlFor="email">Email Address<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='email' 
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        name='phone' 
                        id='phone'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <hr />
        
        <div className="info">
            <h3>Account Information</h3>
            <div className="name">
                <div className="input-box">
                    <label htmlFor="username">Username<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='username' 
                        id='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <hr />
        
        <div className="info">
            <h3>Professional Information</h3>
            <div className="name">
                <div className="input-box">
                    <label htmlFor="industry">Industry<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='industry' 
                        id='industry'
                        value={industry}
                        onChange={e => setIndustry(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="jobTitle">Job Title / Position<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='jobTitle' 
                        id='jobTitle'
                        value={jobTitle}
                        onChange={e => setJobTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="contact">
                <div className="input-box">
                    <label htmlFor="experience">Years of Experience<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="number" 
                        name='experience' 
                        id='experience'
                        value={experience}
                        onChange={e => setExperience(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="educationLevel">Education Level</label>
                    <input 
                        type="text" 
                        name='educationLevel' 
                        id='educationLevel'
                        value={educationLevel}
                        onChange={e => setEducationLevel(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="pjt">Preferred Job type<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='pjt' 
                        id='pjt'
                        placeholder='Full-time, part-time, internship, contract, temporary'
                        value={pjt}
                        onChange={e => setPjt(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <hr />
        
        <div className="info">
            <h3>Location</h3>
            <div className="name">
                <div className="input-box">
                    <label htmlFor="city">City<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='city' 
                        id='city'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="state">State<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="text" 
                        name='state' 
                        id='state'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <label htmlFor="country">Country<span style={{color: 'red'}}>*</span></label>
                    <input 
                        type="country" 
                        name='country' 
                        id='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <input type='submit' value='Create Account' className='submit-btn' />
        <p style={{textAlign: 'center', marginTop: '10px'}}>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;
