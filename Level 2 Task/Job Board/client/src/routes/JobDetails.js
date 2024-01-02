import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/jobboard/jobs/${jobId}`);
                console.log(response);

                setJobDetails(response.data.result);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    return (
        <div>
            {jobDetails ? (
                <div className="job-details-container">
                    <h1>{jobDetails.title}</h1>
                    <div className="job-info">
                        <div className="info-item">
                            <strong>Company:</strong> {jobDetails.companyName}
                        </div>
                        <div className="info-item">
                            <strong>Location:</strong> {jobDetails.location}
                        </div>
                        <div className="info-item">
                            <strong>Job Type:</strong> {jobDetails.jobType}
                        </div>
                    </div>
                    <div className="job-description">
                        <h2>Description:</h2>
                        <p>{jobDetails.jobDesc}</p>
                    </div>
                    <div className="application-form">
                        <button>Apply Now</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default JobDetails;
