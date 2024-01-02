import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplaySearchResults = ({ searchResults }) => {
    return (
        <>
            {searchResults.length > 0 && (
                <div className="featured-jobs">
                    {searchResults.map(searchResult => (
                        <Link to={`/jobs/${searchResult._id}`} className="job" key={searchResult._id}>
                            <div className="top">
                                <div className="job-cat">
                                    {/* <div className='job-cat-icon'>{ job.icon }</div> */}
                                    <p>{ searchResult.category }</p>
                                </div>
                                <p className='job-title'>{ searchResult.title }</p>
                                <div className="loc-type">
                                    <div className="loc">
                                        <FaGlobe />
                                        <p>{ searchResult.location }</p>
                                    </div>
                                    <div className="type">
                                        { searchResult.jobType }
                                    </div>
                                </div>
                            </div>
                            <div className="company">
                                <div className="date-name">
                                    <p>{ new Date(searchResult.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) }</p>
                                    <p style={{ marginTop: '10px' }}>{ searchResult.companyName }</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

export default DisplaySearchResults;
