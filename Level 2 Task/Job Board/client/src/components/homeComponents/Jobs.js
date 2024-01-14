import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('https://jobboard-server.vercel.app/jobboard/jobs')
            .then(res => {
                setJobs(res.data.jobs.slice(0, 3));
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className='jobs'>
            <div className="title">
                <h1>Popular Jobs</h1>
                <Link to="/jobs">View all</Link>
            </div>
            <div className="featured-jobs">
                {jobs.map(job => (
                    <Link to={`/jobs/${job._id}`} className="job" key={job._id}>
                        <div className="top">
                            <div className="job-cat">
                                {/* <div className='job-cat-icon'>{ job.icon }</div> */}
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

export default Jobs;
