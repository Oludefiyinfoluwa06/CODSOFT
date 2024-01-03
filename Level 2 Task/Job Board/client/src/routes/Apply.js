import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/apply.css';

const Apply = () => {
    const { jobId } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);
        formData.append('coverLetter', coverLetter);

        axios.post(`http://localhost:5000/jobboard/jobs/apply/${jobId}`, formData)
            .then(res => {
                if (res.data.msg === "Application sent successfully") {
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage('Error submitting application. Please try again.');
            });
    };

    return (
        <div className="apply-form">
            <h2>Apply for the Job</h2>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="form-group">
                    <label htmlFor="name">Full name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="resume">Resume:</label>
                    <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        name='resume'
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter:</label>
                    <textarea
                        id="coverLetter"
                        value={coverLetter}
                        name='coverLetter'
                        onChange={(e) => setCoverLetter(e.target.value)}
                        required
                    />
                </div>
                <div className="error-message">{errorMessage}</div>

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default Apply;
