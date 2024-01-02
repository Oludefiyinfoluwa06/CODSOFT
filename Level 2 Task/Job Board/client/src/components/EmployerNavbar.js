import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployerNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("employer");
        navigate('/post-a-job/employer-login');
        window.location.reload();
    }

    useEffect(() => {
        const employer = JSON.parse(localStorage.getItem('employer'));

        if (employer && employer.token) {
            setIsLoggedIn(true);
        }

    }, []);

    return (
        <nav>
            <div className="logo">
                <label>Jobboard</label>
            </div>
            <div className="log">
            {isLoggedIn ? 
                <button onClick={handleLogout}>Logout</button>
                : <Link to="/post-a-job/employer-login">Login</Link>
            }
            </div>
            {/* <ul>
                <li><Link to="/employer">Home</Link></li>
                <li><Link to="/employer/post-a-job">Post a Job</Link></li>
                <li><Link to="/employer/jobs">Job Listings</Link></li>
                <li><Link to="/employer/job-applications">Applications</Link></li>
                <li><Link to="/employer/company-profile">Company Profile</Link></li>
            </ul> */}
        </nav>
    );
}

export default EmployerNavbar;
