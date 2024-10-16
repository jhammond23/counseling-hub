import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'; // Adjust the path as needed
import './HomePage.css';
import Avatar from '../components/Avatar';
import { db } from '../firebase-config'; // Adjust the path if needed
import { doc, getDoc } from 'firebase/firestore';
import SafeSpace from '../pages/SafeSpace'; // If you need to render the avatar
import AvatarRenderer from '../components/AvatarRenderer'; // If you need to render the avatar

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [hoverText, setHoverText] = useState(""); // Empty state when nothing is hovered
  const [textBoxPosition, setTextBoxPosition] = useState({ top: 0, left: 0 }); // State for text box position
  const [avatarData, setAvatarData] = useState(null);
  const [showIntroText, setShowIntroText] = useState(true); // New state for intro text visibility
  const introTextRef = useRef(null); // Create a ref to track the intro text block

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);

      if (user) {
        try {
          const userDocRef = doc(db, `users/${user.uid}`);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setAvatarData(data.avatarData || null);
          }
        } catch (error) {
          console.error('Error fetching avatar data:', error);
        }
      } else {
        setAvatarData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to hide the intro text when the user clicks the close button
  const handleCloseIntroText = () => {
    setShowIntroText(false); // Hide the intro text
  };

  // Detect clicks outside of the intro text block
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (introTextRef.current && !introTextRef.current.contains(event.target)) {
        handleCloseIntroText(); // Close the intro text if clicked outside
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [introTextRef]);

  return (
    <section className="home">
      <div className="blackBG">
        <header className="homeMobileHeader">
          <h1 className="mirandus-hub">Counseling Hub</h1>
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
            <Link to="/bulletin" className='menu-item four' onMouseEnter={(e) => handleMouseEnter(e, "Check the Bulletin")} onMouseLeave={handleMouseLeave}>Bulletin</Link>
          </h2>
          <h2>
            <Link className="menu-item three" to="/journal" onMouseEnter={(e) => handleMouseEnter(e, "Start Your Journal")} onMouseLeave={handleMouseLeave}>Journal</Link>
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

      {/* Conditionally render the intro text on page load */}
      {showIntroText && (
        <div className="intro-text-doc" ref={introTextRef}>
          <div className="intro-text-content">
            <h2>Welcome to Counseling Hub</h2>
            <h3>Your Journey to Healing Begins Here</h3>

            <p>We are so glad you've found us. Counseling Hub is a self-paced, self-help website dedicated to supporting transgender individuals who are healing from sexual abuse. We recognize that <em>the path to recovery is personal</em>, and healing looks different for everyone. That's why we've designed this space for you to explore at your own pace, building skills and resilience as you move forward.</p>

            <h3>What You Can Expect:</h3>
            <p>Our website is structured to provide you with tools, resources, and a supportive environment to guide your healing journey. You can visit daily or whenever you feel ready to explore new content. <em>This is your space</em>—return whenever you need to.</p>

            <h3>How It Works:</h3>
            <ul>
              <li><strong>Daily Healing Practices:</strong> Every day, you’ll find a new healing practice centered around mindfulness, grounding techniques, or self-compassion.</li>
              <li><strong>Self-Care Skill Building:</strong> Our Library section is full of lessons and activities that teach self-care strategies.</li>
              <li><strong>Safe Space:</strong> Our Safe Space section is an avatar creation center where you can create an image that reflects who you are.</li>
              <li><strong>Progress Tracking:</strong> Use our Journal to reflect on your development and celebrate your growth.</li>
              <li><strong>Safety Planning Tools:</strong> The Library section offers practical resources for navigating difficult moments.</li>
              <li><strong>Crisis Resources:</strong> If at any point you feel overwhelmed or in need of immediate assistance, visit our Library page for resources.</li>
            </ul>

            <p><h3>Your Healing, Your Pace</h3>
              Take things one step at a time, in your own way. Healing from sexual abuse is difficult, especially within the transgender community. <em>You are deserving of healing and care</em>.</p>

            <p>We’re honored to walk with you on this journey to recovery.</p>
          </div>

          <button onClick={handleCloseIntroText} className="close-intro-button">Close</button>

        </div>
      )}

      {avatarData ? (
        <AvatarRenderer avatarData={avatarData} />
      ) : (
        <p></p>
      )}

    </section>
  );
}
