import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth'; // Import signOut method for logging out
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Journal from './components/Journal';
import Bulletin from './pages/Bulletin';
import Aces from './pages/Aces';
import DailyTasks from './pages/DailyTasks';
import './App.css';
import Library from './pages/Library';
import ReadingResources from './pages/ReadingResources';
import VideoResources from './pages/VideoResources';
import Activities from './pages/DailyActivities.js';
import GuidedMediation from './pages/GuidedMediation';
import SafeSpace from './pages/SafeSpace';
import FreeAssessments from './pages/FreeAssessments.js';
import LogoutConfirmation from './components/LogoutConfirmation.js';
import About from './pages/AboutPage.js'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!currentUser ? <Signup /> : <Navigate to="/" />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/bulletin' element={<Bulletin />} />
        <Route path='/aces-test' element={<Aces />} />
        <Route path='/daily-tasks' element={<DailyTasks />} />
        <Route path='/library' element={<Library />} />
        <Route path='/reading-resources' element={<ReadingResources />} />
        <Route path='/video-resources' element={<VideoResources />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/guided-mediation' element={<GuidedMediation />} />
        <Route path='/safe-space' element={<SafeSpace />} />
        <Route path="/free-assessments" element={<FreeAssessments />} />
        <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
        <Route path='/about' element={<About />} />

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
