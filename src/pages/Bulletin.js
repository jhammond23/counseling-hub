import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config'; // Adjust the path as needed
import './HomePage.css';
import './Bulletin.css';
import Avatar from '../components/Avatar';

export default function Bulletin() {
    const [currentUser, setCurrentUser] = useState(null);
    const [index, setIndex] = useState(null);
    const menu = document.getElementById("menu");
    const userAvatar = ''; // Leave empty to use the default placeholder

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe(); // Cleanup subscription on component unmount
    }, []);

    return (
        <section className="bulletin-bg">
            <div id="bulletin-menu">
                <div id="bulletin-items">
                    <h2>
                        <Link className="menu-item three" to="/daily-tasks">Daily Tasks</Link>
                    </h2>
                    <h2>
                        <Link to="/bulletin" className='menu-item four bent'>Guided Activity</Link>
                    </h2>
                    <h2>
                        <Link className="menu-item two" to="/activities">Daily Activites</Link>
                    </h2>
                </div>
                <div className="menu-background-pattern"></div>
                <div className="menu-background-image-bulletin"></div>
            </div>
        </section>
    );
}