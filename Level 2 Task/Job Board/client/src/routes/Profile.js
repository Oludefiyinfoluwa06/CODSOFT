import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';
import axios from 'axios';

const Profile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pjt, setPjt] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.token) {
      navigate('/login');
      window.location.reload();
      return;
    }

    axios.get(`http://localhost:5000/jobboard/user/${user.email}`)
      .then(res => {
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setUsername(res.data.username);
        setIndustry(res.data.industry);
        setJobTitle(res.data.jobTitle);
        setExperience(res.data.experience);
        setEducationLevel(res.data.educationLevel);
        setCity(res.data.city);
        setState(res.data.state);
        setCountry(res.data.country);
        setPjt(res.data.pjt);
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [navigate]);


  return (
    <div className='profile'>
      <h1>User Profile</h1>
      <div className="personal-info">
        <h2>Personal Information</h2>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Firstname</p>
          <p>{firstname}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Lastname</p>
          <p>{lastname}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Email Address</p>
          <p>{email}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Phone number</p>
          <p>{phone}</p>
        </div>
      </div>

      <div className="account-info">
        <h2>Account Information</h2>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Username</p>
          <p>{username}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Password</p>
          <p>*******</p>
        </div>
      </div>

      <div className="prof-info">
        <h2>Professional Information</h2>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Industry</p>
          <p>{industry}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Job Title</p>
          <p>{jobTitle}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Years of Experience</p>
          <p>{experience}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Education Level</p>
          <p>{educationLevel}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Preferred Job type</p>
          <p>{pjt}</p>
        </div>
      </div>

      <div className="location">
        <h2>Location</h2>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>City</p>
          <p>{city}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>State</p>
          <p>{state}</p>
        </div>
        <div className="user-info">
          <p style={{ fontWeight: 'bold' }}>Country</p>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
