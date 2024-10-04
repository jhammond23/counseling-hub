import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentUser, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    onLogout(); // Perform logout action
    navigate('/logout-confirmation'); // Redirect to confirmation page
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="logo-link-cont">
          <h1 className="logo">Counseling Hub</h1>
        </Link>
        <ul className="flex">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/library">Library</Link></li>
          <li className="px-4"><Link to="/safe-space">Safe Space</Link></li>
          
          {/* Conditional rendering for authenticated user */}
          {currentUser ? (
            <>
              {/* Dropdown Trigger */}
              <li className="px-4 relative">
                <Link to='/bulletin' className='bulletin-btn' onMouseEnter={toggleDropdown}>Bulletin</Link>
              </li>
              <li className="px-4"><Link to="/bulletin">Journal</Link></li>
              {/* Avatar and Logout instead of Login/Signup */}
              {/* <li className="px-4"><Avatar /></li> */}
              <li className="px-4 logout-btn"><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              {/* Show Login/Signup if no currentUser */}
              <li className="px-4 login-button"><Link to="/login">Login</Link></li>
              <li className="px-4 signup-button"><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
