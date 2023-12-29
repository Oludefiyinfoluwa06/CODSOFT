import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
  }
  
  return (
    <>
      <nav>
        <label>JobBoard</label>
        <div className='icons'>
          <div className="user-icon">
            <button onClick={handleLogout}>Logout</button>
            <FaUserCircle />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuVisible ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
      <div className={isMenuVisible ? "menu-items" : "menu-items hidden"}>
        <form>
          {/* <div className="search">
            <input type="text" />
            <button>Search</button>
          </div> */}
          <div className="search-icon">
            <FaSearch />
          </div>
        </form>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Browse Jobs</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/signup" className='button'>Sign up</Link></li>
        </ul>
      </div>
    </>
    
  );
}

export default Navbar;
