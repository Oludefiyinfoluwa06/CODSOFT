import React, { useState } from 'react';
import axios from 'axios';
import DisplaySearchResults from './DisplaySearchResults';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async e => {
        e.preventDefault();

        await axios.get(`http://localhost:5000/jobboard/jobs/search/${searchQuery}`)
            .then(res => {
                setSearchResults(res.data.searchResults);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        
        console.log(searchQuery);
    }

    return (
        <>
            <form action="" onSubmit={handleSearch}>
                <input type="text" placeholder='Search for Jobs' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <button>Search</button>
            </form>
            <DisplaySearchResults searchResults={searchResults} />
        </>
    );
}

export default Search;
