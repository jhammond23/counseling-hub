import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'; // Adjust the path as needed
import './HomePage.css';
import Avatar from '../components/Avatar';

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [hoverText, setHoverText] = useState(""); // Empty state when nothing is hovered
  const [textBoxPosition, setTextBoxPosition] = useState({ top: 0, left: 0 }); // State for text box position

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // Function to handle mouse hover and dynamically position the text box
  const handleMouseEnter = (event, text) => {
    const rect = event.target.getBoundingClientRect(); // Get the position of the hovered menu item
    setHoverText(text); // Set the corresponding text
    setTextBoxPosition({
      top: rect.top + window.scrollY, // Account for scrolling
      left: rect.right + 100 // Move the text box 100 pixels to the right of the menu item
    });
  };

  // Function to handle mouse leave and immediately hide the text box
  const handleMouseLeave = () => {
    setHoverText(""); // Clear text immediately to prevent empty box from showing
  };

  return (
    <section className="home">
      <div className="blackBG">
        <header className="homeMobileHeader">
          <h1 className="mirandus-hub">Counseling Hub</h1>
          {currentUser && <Avatar image={currentUser.photoURL || ''} />}
        </header>
      </div>
      <div id="menu">
        <div id="menu-items">
          <h2>
            <Link to="/library" className='menu-item one' onMouseEnter={(e) => handleMouseEnter(e, "Explore the Library")} onMouseLeave={handleMouseLeave}>Library</Link>
          </h2>
          <h2>
            <Link to="/safe-space" className="menu-item two" onMouseEnter={(e) => handleMouseEnter(e, "Enter the Safe Space")} onMouseLeave={handleMouseLeave}>Safe Space</Link>
          </h2>
          <h2>
            <Link className="menu-item three" to="/journal" onMouseEnter={(e) => handleMouseEnter(e, "Start Your Journal")} onMouseLeave={handleMouseLeave}>Journal</Link>
          </h2>
          <h2>
            <Link to="/bulletin" className='menu-item four' onMouseEnter={(e) => handleMouseEnter(e, "Check the Bulletin")} onMouseLeave={handleMouseLeave}>Bulletin</Link>
          </h2>
          <h2>
            <Link to='/about' className="menu-item five" onMouseEnter={(e) => handleMouseEnter(e, "Learn About Us")} onMouseLeave={handleMouseLeave}>About</Link>
          </h2>
        </div>
        <div className="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
      </div>

      {/* Conditionally render the text box based on hoverText */}
      <div
        id="text-box"
        style={{
          display: hoverText ? 'block' : 'none', // Only display the box when there is text
          top: `${textBoxPosition.top}px`,
          left: `${textBoxPosition.left}px`,
          position: "absolute",
        }}
      >
        <p>{hoverText}</p>
      </div>
    </section>
  );
}
