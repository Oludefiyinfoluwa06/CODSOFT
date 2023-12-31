import React from 'react';
import { Outlet } from 'react-router-dom';
import EmployerNavbar from '../components/EmployerNavbar';

const EmployerLayout = () => {
    return (
        <div>
            <EmployerNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default EmployerLayout;
