import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { auth } from '../firebase-config';
import './DailyTasks.css';

const DailyTasks = () => {
    const [dailyTasksCompleted, setDailyTasksCompleted] = useState(false);
    const [taskProgress, setTaskProgress] = useState(0);
    const [currency, setCurrency] = useState(0);
    const [rewardClaimed, setRewardClaimed] = useState(false); // Track if reward has been claimed

    useEffect(() => {
        const checkAuthAndFetchTasks = () => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    fetchTaskProgress(user.uid);
                } else {
                    console.log('No user logged in');
                }
            });
        };

        const fetchTaskProgress = async (userId) => {
            const userDocRef = doc(db, `users/${userId}`);
            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const lastResetDate = data.lastResetDate?.toDate();
                const today = new Date();
                const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

                if (!lastResetDate || lastResetDate < startOfDay) {
                    await resetDailyTasks(userId);
                } else {
                    const tasksCompletedToday = data.tasksCompletedToday || 0;
                    setTaskProgress(tasksCompletedToday);
                    setDailyTasksCompleted(tasksCompletedToday >= 3);
                    setCurrency(data.currency || 0);
                    setRewardClaimed(data.dailyRewardClaimed || false);
                }
            }
        };

        const resetDailyTasks = async (userId) => {
            const userDocRef = doc(db, `users/${userId}`);
            await updateDoc(userDocRef, {
                tasksCompletedToday: 0,
                lastResetDate: new Date(),
                dailyRewardClaimed: false
            });
            setTaskProgress(0);
            setDailyTasksCompleted(false);
            setRewardClaimed(false);
        };

        checkAuthAndFetchTasks();
    }, []);

    const claimReward = async () => {
        if (!rewardClaimed && auth.currentUser) {
            const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
            await updateDoc(userDocRef, {
                currency: increment(50),
                dailyRewardClaimed: true
            });
            setCurrency(prevCurrency => prevCurrency + 50);
            setRewardClaimed(true);
        }
    };

    return (
        <div className='daily-tasks-parent'>
            <div className='daily-tasks-board'>
                <div className='daily-tasks-cont'>
                    <h2>Daily Challenges</h2>
                    <p>Engage daily, complete tasks, and earn rewards!</p>

                    {dailyTasksCompleted ? (
                        <>
                            <p className="congratulations">Congratulations! 🎉 You've completed today's daily tasks.</p>
                            {dailyTasksCompleted && !rewardClaimed ? (
                                <button className='claim-rewards-btn' onClick={claimReward}>Claim Reward</button>
                            ) : null}
                            {rewardClaimed ? <p>You've claimed your 50 currency reward!</p> : null}
                        </>
                    ) : (
                        <>
                            <p>Today's Task: Complete <a href='/journal' className='prompt-goal'>3 prompted journals</a>.</p>
                            <p className='uncomplete'>You have completed {taskProgress} out of 3 daily tasks.</p>
                            <p className='daily-task-info'>Complete all daily tasks to earn an extra 50 currency! Your tasks and progress reset at midnight, so make sure to complete them every day to maximize your rewards.</p>
                        </>
                    )}
                </div>
            </div>
            <div className="currency-display">Current Currency: {currency}</div>
        </div>
    );
};

export default DailyTasks;
