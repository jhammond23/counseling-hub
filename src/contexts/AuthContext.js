import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import { setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); // Add loading state to manage initial load

  useEffect(() => {
    let inactivityTimeout;

    function resetTimer() {
      clearTimeout(inactivityTimeout);
      // Set a new timeout
      inactivityTimeout = setTimeout(() => {
        // Handle inactivity here (e.g., show warning or log out user)
        alert("You've been inactive for 10 minutes. You will be logged out soon.");
        // Optionally, log out the user or refresh the token here
      }, 600000); // 10 minutes in milliseconds
    }

    // Listen for any mouse movements or key presses to reset the timer
    window.addEventListener('mousemove', resetTimer, false);
    window.addEventListener('keypress', resetTimer, false);

    // Initialize the timer
    resetTimer();

    return () => {
      // Clean up
      clearTimeout(inactivityTimeout);
      window.removeEventListener('mousemove', resetTimer, false);
      window.removeEventListener('keypress', resetTimer, false);
    };
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      await setPersistence(auth, browserLocalPersistence)
        .then(() => {
          // Listen for authentication state changes after setting persistence
          onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (loading) setLoading(false); // Update loading state
            // Log the user state for debugging
            if (user) {
              console.log("User is signed in:", user);
            } else {
              console.log("No user signed in or user signed out.");
            }
          });
        })
        .catch((error) => {
          // Handle errors here, such as by logging them
          console.error("Error setting persistence:", error);
        });
    };

    initAuth();
  }, []);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Ensure children are rendered only after loading is complete */}
    </AuthContext.Provider>
  );
};
