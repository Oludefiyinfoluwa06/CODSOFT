import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import axios from 'axios';

const HomeJobs = () => {
  const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/jobboard/jobs')
            .then(res => {
                setJobs(res.data.jobs);
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className='jobs'>
            <div className="title">
                <h1>Browse Jobs</h1>
                <form action="">
                    <input type="text" placeholder='Search for Jobs' />
                    <button>Search</button>
                </form>
            </div>
            <div className="featured-jobs">
                {jobs.map(job => (
                    <Link to={`/jobs/${job._id}`} className="job" key={job._id}>
                        <div className="top">
                            <div className="job-cat">
                                <p>{ job.category }</p>
                            </div>
                            <p className='job-title'>{ job.title }</p>
                            <div className="loc-type">
                                <div className="loc">
                                    <FaGlobe />
                                    <p>{ job.location }</p>
                                </div>
                                <div className="type">
                                    { job.jobType }
                                </div>
                            </div>
                        </div>
                        <div className="company">
                            <div className="date-name">
                                <p>{ new Date(job.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) }</p>
                                <p style={{ marginTop: '10px' }}>{ job.companyName }</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomeJobs