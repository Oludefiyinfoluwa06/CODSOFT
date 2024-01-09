import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployerSignup = () => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const employer = localStorage.getItem("employer");

        if (employer) {
            navigate("/post-a-job");
            return;
        }

    }, [navigate]);

    const handleSubmit = async e => {
        e.preventDefault();

        await axios.post('http://localhost:5000/jobboard/employer/employer-signup', { companyName, email, password })
            .then(res => {
                navigate('/post-a-job/employer-login');
                console.log(res);
            })
            .catch(err => {
                setError(err.response.data.error);
                console.log(err);
            });
    }


    return (
        <div className='signup'>
            <form onSubmit={handleSubmit} >
                <h2>Be an Employer</h2>
                <p className="error">{error}</p>
                <div className="info">
                    <div className="name">
                        <div className="input-box">
                            <label htmlFor="name">Company Name</label>
                            <input 
                                type="text" 
                                name='name' 
                                id='name'
                                value={companyName}
                                onChange={e => setCompanyName(e.target.value)}
                            />
                        </div>
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
                <input type='submit' value='Signup' className='submit-btn' />
                <p style={{textAlign: 'center', marginTop: '10px'}}>Already have an account? <Link to='/employer/employer-login'>Login</Link></p>
            </form>
        </div>
    );
}

export default EmployerSignup;
