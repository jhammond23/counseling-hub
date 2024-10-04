import React, { useState, useEffect } from 'react';
import { journalPrompts } from '../data/prompts';
import { db } from '../firebase-config';
import { collection, addDoc, doc, getDoc, setDoc, getDocs, updateDoc, Timestamp, increment } from 'firebase/firestore';
import { auth } from '../firebase-config';
import './Journal.css';

const Journal = () => {
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [response, setResponse] = useState('');
    const [currency, setCurrency] = useState(0);
    const [error, setError] = useState('');
    const [isFreeWriteMode, setIsFreeWriteMode] = useState(false);
    const [journalEntries, setJournalEntries] = useState([]);
    const [freeWrites, setFreeWrites] = useState([]);
    const [showPastPrompts, setShowPastPrompts] = useState(false);
    const [showPastFreeWrites, setShowPastFreeWrites] = useState(false);
    const [lastCompletedDate, setLastCompletedDate] = useState(null);

    const startOfDay = (date) => {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        return start;
      };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                fetchUserData();
            }
        });

        return () => unsubscribe();
    }, []);

  // Updated fetchUserData to reset prompts at midnight
  const fetchUserData = async () => {
    const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setCurrency(data.currency || 0);
      const lastDate = data.lastCompletedDate ? data.lastCompletedDate.toDate() : new Date();
      setLastCompletedDate(lastDate);
      const now = new Date();
      // Check if it's past midnight of the last completed date
      if (now >= startOfDay(new Date(lastDate).setDate(lastDate.getDate() + 1))) {
        setCurrentPrompt(0);
        // Reset tasksCompletedToday and lastCompletedPrompt
        await updateDoc(userDocRef, {
          lastCompletedPrompt: 0,
          tasksCompletedToday: 0
        });
      } else {
        setCurrentPrompt(data.lastCompletedPrompt + 1 || 0);
      }
    } else {
      // Handle user data initialization if necessary
    }
  };

      // Call this function to update lastCompletedDate when a prompt is submitted
  const updateLastCompletedDate = async () => {
    const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
    const now = new Date();
    await updateDoc(userDocRef, {
      lastCompletedDate: Timestamp.fromDate(now),
    });
    setLastCompletedDate(now);
  };

    const handleSubmission = async () => {
        if (!response.trim()) {
            setError('Response cannot be empty.');
            return;
        }
    
        const now = new Date();
        setLastCompletedDate(now); // Update the local state
    
        const path = isFreeWriteMode ? 'freewrites' : 'responses';
        const collectionRef = collection(db, `users/${auth.currentUser.uid}/${path}`);
        try {
            await updateCurrency();
            await updateLastCompletedDate(); // Update the last completed date
            setResponse('');
            setCurrentPrompt(currentPrompt + 1);
            await addDoc(collectionRef, {
                prompt: isFreeWriteMode ? 'Free Write' : journalPrompts[currentPrompt],
                response,
                createdAt: Timestamp.now(), // Use Firestore Timestamp for consistency
                
            });
    
            if (!isFreeWriteMode) {
                await updateTaskProgress(); // Only update task progress for prompted entries
            }
            
            await updateCurrency();
            setResponse('');
            if (!isFreeWriteMode) setCurrentPrompt(currentPrompt + 1);
            fetchJournalEntries(); // Refetch entries to update the UI
            if (isFreeWriteMode) fetchFreeWrites(); // Refetch free writes if in free write mode
        } catch (error) {
            setError('Failed to save response. Please try again.');
            console.error(error);
        }
    };

    const updateTaskProgress = async () => {
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        await updateDoc(userDocRef, {
            // Use the Firestore increment function to atomically increment the task count
            tasksCompletedToday: increment(1)
        });
    };
    
    

    const updateCurrency = async () => {
        const newCurrency = currency + 10;
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        await updateDoc(userDocRef, {
            currency: newCurrency,
            // Only update lastCompletedPrompt if not in free write mode
            ...(isFreeWriteMode ? {} : { lastCompletedPrompt: currentPrompt }),
        });
        setCurrency(newCurrency);
    };

    const fetchJournalEntries = async () => {
        const entriesRef = collection(db, `users/${auth.currentUser.uid}/responses`);
        const snapshot = await getDocs(entriesRef);
        setJournalEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const fetchFreeWrites = async () => {
        const freeWritesRef = collection(db, `users/${auth.currentUser.uid}/freewrites`);
        const snapshot = await getDocs(freeWritesRef);
        setFreeWrites(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const togglePastPrompts = () => {
        if (!showPastPrompts) {
            fetchJournalEntries(); // Fetch only when we're about to show them
        }
        setShowPastPrompts(!showPastPrompts);
    };

    const togglePastFreeWrites = () => {
        if (!showPastFreeWrites) {
            fetchFreeWrites(); // Fetch only when we're about to show them
        }
        setShowPastFreeWrites(!showPastFreeWrites);
    };

    const updateLastCompletedDateInFirestore = async (date) => {
        const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
        await updateDoc(userDocRef, {
            lastCompletedDate: Timestamp.fromDate(date), // Firestore Timestamp
        });
    };


    return (
        <div className="journal-container">
            {error && <div className="error-message">{error}</div>}
            <div className="journal-content">
                <div className="journal-prompt">{isFreeWriteMode ? 'Free Write' : journalPrompts[currentPrompt]}</div>
                <textarea
                    className="journal-textarea"
                    placeholder="What's on your mind?"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                ></textarea>
                <button className="journal-button" onClick={handleSubmission}>
                    {isFreeWriteMode ? 'Save Free Write' : 'Submit and Next Prompt'}
                </button>
                <button className="toggle-buttons free-write" onClick={() => setIsFreeWriteMode(!isFreeWriteMode)}>
                    {isFreeWriteMode ? 'Back to Prompts' : 'Free Write'}
                </button>
                <button className="toggle-buttons previous-prompts" onClick={togglePastPrompts}>
                    {showPastPrompts ? 'Hide' : 'Show'} Previous Prompt Entries
                </button>
                {showPastPrompts && journalEntries.map(entry => (
                    <div key={entry.id} className="journal-entry journal-textarea">
                        <div className="entry-prompt">{entry.prompt}</div>
                        <div className="entry-response">{entry.response}</div>
                        <div className="entry-date">{entry.createdAt.toDate().toLocaleString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                            hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
                        })}</div>
                    </div>
                ))}
                <button className="toggle-buttons previous-free-writes" onClick={togglePastFreeWrites}>
                    {showPastFreeWrites ? 'Hide' : 'Show'} Past Free Writes
                </button>
                {showPastFreeWrites && freeWrites.map(write => (
                    <div key={write.id} className="journal-entry journal-textarea">
                        <div className="entry-content">{write.response}</div>
                        <div className="entry-date">{write.createdAt.toDate().toLocaleString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                            hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
                        })}</div>
                    </div>
                ))}
            </div>
            <div className="currency-display">Current Currency: {currency}</div>
        </div>
    );
    
};

export default Journal;
