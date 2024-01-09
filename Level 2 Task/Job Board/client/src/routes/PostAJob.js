import React, { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostAJob = () => {
    const storedEmployerData = JSON.parse(localStorage.getItem("employer")) || {};

    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [location, setLocation] = useState();
    const [jobType, setJobType] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [companyName, setCompanyName] = useState(storedEmployerData.companyName || '');
    const [email, setEmail] = useState(storedEmployerData.email || '');

    const [error, setError] = useState();
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submittingMessage, setSubmittingMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const employer = localStorage.getItem("employer");

        if (!employer) {
            navigate("/post-a-job/employer-login");
            return;
        }

    }, [navigate]);

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        setSubmittingMessage("Your job is being posted");

        const validCategories = ["Information Technology", "Engineering", "Finance", "Healthcare", "Education", "Design"];
        const validJobTypes = ["Full-time", "Part-time", "Internship", "Contract"];

        if (!validCategories.includes(category)) {
            setError("Category does not exist");
            return;
        }

        if (!validJobTypes.includes(jobType)) {
            setError("Job type does not exist");
            return;
        }

        await axios.post('http://localhost:5000/jobboard/jobs', { title, category, location, jobType, jobDesc, companyName, email, employer: { _id: storedEmployerData.employerId, }, })
            .then(res => {
                if (res.data.error) {
                    setError("Input fields cannot be empty");
                }
                setSubmitting(false);
                setMessage("Your job has been posted");
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='post-job'>
            <p style={{ width: '100%', position: 'fixed', color: '#fff', background: 'green', top: 0, left: 0, textAlign: 'center' }}>{message}</p>
            {submitting && (
                <p style={{ width: '100%', position: 'fixed', color: '#fff', background: '#007bff', top: 0, left: 0, textAlign: 'center' }}>{submittingMessage}</p>
            )}
            <h2>Post a Job</h2>
            <p className='error-message'>{ error }</p>
            <form action="">
                <div className="input-box">
                    <label htmlFor="title">Job title / position</label>
                    <input type="text" id='title' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="input-box">
                    <label htmlFor="category">Category</label>
                    <small>
                        Category available are these values only - Information Technology, Engineering, Finance, Healthcare, Education, Design
                    </small>
                    <input type="text" id='category' name='category' value={category} onChange={e => setCategory(e.target.value)} />
                </div>
                <div className="input-box">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' name='location' value={location} onChange={e => setLocation(e.target.value)} />
                </div>
                <div className="input-box">
                    <label htmlFor="jobType">Job Type</label>
                    <small>
                        Job type should be either of these values - Full-time, Part-time, Internship, Contract
                    </small>
                    <input type="text" id='jobType' name='jobType' value={jobType} onChange={e => setJobType(e.target.value)} />
                </div>
                <div className="input-box">
                    <label htmlFor="jobDesc">Job Description</label>
                    <textarea name="jobDesc" id="jobDesc" value={jobDesc} onChange={e => setJobDesc(e.target.value)}></textarea>
                </div>
                <div className="input-box">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id='companyName' name='companyName' value={companyName} onChange={e => setCompanyName(e.target.value)} readOnly/>
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} readOnly/>
                </div>
                <button onClick={handleSubmit}>Post Job</button>
            </form>
        </div>
    );
}

export default PostAJob;
