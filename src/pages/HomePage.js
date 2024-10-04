import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'; // Adjust the path as needed
import './HomePage.css';
import Avatar from '../components/Avatar';

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [index, setIndex] = useState(null);
  const menu = document.getElementById("menu");
  const userAvatar = ''; // Leave empty to use the default placeholder


  Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      }
    });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  return (
    <section className="home">
      <div className="blackBG">
        <header className="homeMobileHeader">
          <h1 className="mirandus-hub">Counseling Hub</h1>
          {/* Conditionally render the Avatar if a user is signed in */}
          {currentUser && <Avatar image={currentUser.photoURL || ''} />}
        </header>
      </div>
      <div id="menu">
        <div id="menu-items">
          <h2>
            <Link to="/library" className='menu-item one' onMouseEnter={() => setIndex(1)}>Library</Link>
          </h2>
          <h2>
            <Link to="/safe-space" className="menu-item two" onMouseEnter={() => setIndex(2)}>Safe Space</Link>
          </h2>
          <h2>
            <Link className="menu-item three" to="/journal" onMouseEnter={() => setIndex(3)}>Journal</Link>
          </h2>
          <h2>
            <Link to="/bulletin" className='menu-item four' onMouseEnter={() => setIndex(4)}>Bulletin</Link>
          </h2>
          <h2>
            <Link to='/about' className="menu-item five" onMouseEnter={() => setIndex(5)}>About</Link>
          </h2>
        </div>
        <div className="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
      </div>
    </section>
  );
}
