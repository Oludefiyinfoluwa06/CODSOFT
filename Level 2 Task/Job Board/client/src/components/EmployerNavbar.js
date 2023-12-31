import React from 'react';
import { Link } from 'react-router-dom';

const EmployerNavbar = () => {
    return (
        <nav>
            <div className="logo">
                <label>LOGO</label>
            </div>
            <ul>
                <li><Link to="/employer">Home</Link></li>
                <li><Link to="/post-a-job">Post a Job</Link></li>
                <li><Link to="/jobs">Job Listings</Link></li>
                <li><Link to="/job-applications">Applications</Link></li>
                <li><Link to="/company-profile">Company Profile</Link></li>
            </ul>
        </nav>
    );
}

export default EmployerNavbar;
