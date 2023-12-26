import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
        <label>JobBoard</label>
        <form>
            <input type="text" />
            <button>Search</button>
        </form>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
