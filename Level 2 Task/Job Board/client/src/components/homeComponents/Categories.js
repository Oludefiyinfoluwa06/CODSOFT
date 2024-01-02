import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaMoneyBill, FaPalette, FaSchool, FaStethoscope } from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

const Categories = () => {
    const categories = [
        {
            "id": 1,
            "icon": <FaLaptop />,
            "title": "Information Technology",
            "path": "it"
        },
        {
            "id": 2,
            "icon": <MdEngineering />,
            "title": "Engineering",
            "path": "engineering"
        },
        {
            "id": 3,
            "icon": <FaStethoscope />,
            "title": "Health Care",
            "path": "health-care"
        },
        {
            "id": 4,
            "icon": <FaMoneyBill />,
            "title": "Finance",
            "path": "finance"
        },
        {
            "id": 5,
            "icon": <FaSchool />,
            "title": "Education",
            "path": "education"
        },
        {
            "id": 6,
            "icon": <FaPalette />,
            "title": "Design",
            "path": "design"
        },
    ];

    return (
        <div className='categories'>
            <h1>Popular Categories</h1>
            <div className="job-categories">
                {categories.map(category => (
                    <Link to={category.path} className="category" key={category.id}>
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
