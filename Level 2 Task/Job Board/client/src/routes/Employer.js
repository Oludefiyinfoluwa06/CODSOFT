import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Employer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const employer = localStorage.getItem('employer');

        if (!employer) {
            navigate("/employer/employer-login");
            return;
        }
    }, [navigate]);

    return (
        <div>
            Employer
        </div>
    );
}

export default Employer;
