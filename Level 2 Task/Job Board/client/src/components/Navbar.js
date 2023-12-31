import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBriefcase, FaSignOutAlt, FaUser, FaUserCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isProfileModalVisible, setisProfileModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    setisProfileModalVisible(false);
  };
  
  const toggleProfileModal = () => {
    setisProfileModalVisible(!isProfileModalVisible);
    setIsMenuVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/');
    window.location.reload();
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
      setIsLoggedIn(true);
    }

  }, []);
  
  return (
    <>
      <nav>
        <label>JobBoard</label>
        <div className='icons'>
          <div className="log">
            {isLoggedIn ? 
              <div className="user-icon" onClick={toggleProfileModal}>
                <FaUserCircle />
              </div>
            : <Link to="/login" className='button'>Login</Link>}
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuVisible ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
      <div className={isMenuVisible ? "menu-items" : "menu-items hidden"}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Browse Jobs</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/post-a-job/employer-login">Post a Job</Link></li>
        </ul>
      </div>

      <div className={isProfileModalVisible ? "profile-modal" : "profile-modal hidden"}>
        <ul>
          <li>
            <FaUser />
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <FaBriefcase />
            <Link to="/">My Jobs</Link>
          </li>
          <div className="logout-icon" onClick={handleLogout}>
            <FaSignOutAlt />
          </div>
        </ul>
      </div>
    </>
    
  );
}

export default Navbar;
