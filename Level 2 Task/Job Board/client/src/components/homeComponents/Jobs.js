import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaLaptop, FaMoneyBill, FaPalette, FaSchool, FaStethoscope } from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

const Jobs = () => {
    const jobs = [
        {
            "id": 1,
            "title": "Information Technology",
            "job": "Web developer",
            "icon": <FaLaptop />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "it"
        },
        {
            "id": 2,
            "title": "Engineering",
            "job": "Web developer",
            "icon": <MdEngineering />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "engineering"
        },
        {
            "id": 3,
            "title": "Health Care",
            "job": "Web developer",
            "icon": <FaStethoscope />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "health-care"
        },
        {
            "id": 4,
            "title": "Finance",
            "job": "Web developer",
            "icon": <FaMoneyBill />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "finance"
        },
        {
            "id": 5,
            "title": "Education",
            "job": "Web developer",
            "icon": <FaSchool />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "education"
        },
        {
            "id": 6,
            "title": "Design & Creativity",
            "job": "Web developer",
            "icon": <FaPalette />,
            "location": "Abeokuta, Ogun State",
            "job-type": "Internship",
            "date": "30th December, 2023",
            "company-name": "Ofto Technologies",
            "company-logo": "LOGO",
            "path": "design-and-creativity"
        },
    ];

    return (
        <div className='jobs'>
            <div className="title">
                <h1>Featured Jobs</h1>
                <Link>View all</Link>
            </div>
            <div className="featured-jobs">
                {jobs.map(job => (
                    <Link to="" className="job" key={job.id}>
                        <div className="top">
                            <div className="job-cat">
                                <div className='job-cat-icon'>{ job.icon }</div>
                                <p>{ job.title }</p>
                            </div>
                            <p className='job-title'>{ job.job }</p>
                            <div className="loc-type">
                                <div className="loc">
                                    <FaGlobe />
                                    <p>{ job.location }</p>
                                </div>
                                <div className="type">
                                    { job['job-type'] }
                                </div>
                            </div>
                        </div>
                        <div className="company">
                            <div className="date-name">
                                <p>{ job.date }</p>
                                <p>{ job['company-name'] }</p>
                            </div>
                            <div className="comp-logo">
                                { job['company-logo'] }
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
