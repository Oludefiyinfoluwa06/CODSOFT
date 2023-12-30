import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaLaptop, FaMoneyBill, FaStethoscope } from 'react-icons/fa';

const Categories = () => {
    const categories = [
        {
            "icon": <FaMoneyBill />,
            "title": "Finance",
            "path": "finance"
        },
        {
            "icon": <FaCar />,
            "title": "Construction",
            "path": "construction"
        },
        {
            "icon": <FaLaptop />,
            "title": "Software",
            "path": "software"
        },
        {
            "icon": <FaStethoscope />,
            "title": "Medical",
            "path": "medical"
        },
        {
            "icon": <FaMoneyBill />,
            "title": "Finance",
            "path": "finance"
        },
    ]

    return (
        <div className='categories'>
            <h1>Job Categories</h1>
            <div className="job-categories">
                {categories.map(category => (
                    <Link to={category.path} className="category">
                        <div className="cat-icon">
                            {category.icon}
                        </div>
                        <p>{category.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
