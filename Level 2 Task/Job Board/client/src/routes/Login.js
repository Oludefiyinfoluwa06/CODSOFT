import axios from 'axios';
import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();


        if (email === "" || password === "") {
            setError("Input fields cannot be empty")
        } else {
            try {
                await axios.post('http://localhost:5000/jobboard/login', {
                    email, password
                })
                    .then(res => {
                        if (res.data === "success") {
                            navigate('/dashboard');
                        }
                        
                        if (res.data === "wrongPassword") {
                            setError("Incorrect password")
                        }
                        
                        if (res.data === "failed") {
                            setError("Account does not exist, try signing up");
                        }
                    })
                    .catch(err => console.log(err));
            } catch (err) {
                console.log(err);
            }
        }

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
                <p style={{textAlign: 'center', marginTop: '10px'}}>Don't have an account? <Link to='/signup'>Signup</Link></p>
            </form>
        </div>
    );
}

export default Login;
