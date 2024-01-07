import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/apply.css';

const Apply = () => {
    const { jobId } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submittingMessage, setSubmittingMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        setSubmittingMessage("Your application is being sent. This might take a while");

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);
        formData.append('coverLetter', coverLetter);

        axios.post(`https://jobboard-server.vercel.app/jobboard/jobs/apply/${jobId}`, formData)
            .then(res => {
                setSubmitting(false);
                setMessage(res.data.msg);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
                setErrorMessage('Error submitting application. Please try again.');
            });
    };

    return (
        <div className="apply-form">
            <p style={{ width: '100%', position: 'fixed', color: '#fff', background: 'green', top: 0, left: 0, textAlign: 'center' }}>{message}</p>
            <p style={{ width: '100%', position: 'fixed', color: '#fff', background: 'red', top: 0, left: 0, textAlign: 'center' }}>{errorMessage}</p>
            {submitting && (
                <p style={{ width: '100%', position: 'fixed', color: '#fff', background: '#007bff', top: 0, left: 0, textAlign: 'center' }}>{submittingMessage}</p>
            )}
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
                    <small>PDF files only</small>
                    <input
                        type="file"
                        id="resume"
                        accept=".pdf"
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

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default Apply;
