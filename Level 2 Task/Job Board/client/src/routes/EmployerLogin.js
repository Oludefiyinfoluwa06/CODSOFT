import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const employer = localStorage.getItem('employer');

    if (employer) {
      navigate("/employer");
      return;
    }
  }, [navigate]);

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:5000/jobboard/employer/employer-login', { email, password })
      .then(res => {
        localStorage.setItem("employer", JSON.stringify(res.data));
        navigate('/employer');
        console.log(res);
      })
      .catch(err => {
        setError(err.response.data.error);
        console.log(err);
      });
  }
  
  return (
    <div className='login'>
      <form onSubmit={handleSubmit} >
        <h1>Login here</h1>
        <p className="error">{error}</p>
        <div className="info">
          <div className="name">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input 
                  type="text" 
                  name='email' 
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
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
        <input type='submit' value='Login' className='submit-btn' />
        <p style={{textAlign: 'center', marginTop: '10px'}}>Don't have an account? <Link to='/employer/employer-signup'>Signup</Link></p>
      </form>
    </div>
  );
}

export default EmployerLogin;
